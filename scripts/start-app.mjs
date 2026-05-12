import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, relative, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const START_PORT = 8765;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: "inherit" });
    child.on("exit", (code) => {
      if (code === 0) resolvePromise();
      else reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}

function listen(server, port) {
  return new Promise((resolvePromise, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => resolvePromise(port));
  });
}

async function findPort(server) {
  for (let port = START_PORT; port < START_PORT + 20; port++) {
    try {
      await listen(server, port);
      return port;
    } catch (error) {
      if (error.code !== "EADDRINUSE") throw error;
    }
  }
  throw new Error("No hay puertos libres para abrir la app.");
}

async function openBrowser(url) {
  const command = process.platform === "win32"
    ? ["cmd", ["/c", "start", "", url]]
    : process.platform === "darwin"
      ? ["open", [url]]
      : ["xdg-open", [url]];
  spawn(command[0], command[1], { detached: true, stdio: "ignore" }).unref();
}

async function serveFile(req, res) {
  const requestedPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const cleanPath = requestedPath === "/" ? "/index.html" : requestedPath;
  const filePath = normalize(join(ROOT, cleanPath));

  const relativePath = relative(ROOT, filePath);
  if (relativePath.startsWith("..") || relativePath.includes(":")) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    await readFile(filePath, { flag: "r" });
    res.writeHead(200, { "Content-Type": MIME[extname(filePath).toLowerCase()] || "application/octet-stream" });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
  }
}

console.log("Actualizando datos de MunchStats...");
await run(process.execPath, ["scripts/sync-munchstats.mjs"]);

const server = createServer(serveFile);
const port = await findPort(server);
const url = `http://127.0.0.1:${port}`;

console.log(`App lista en ${url}`);
console.log("Deja esta ventana abierta mientras uses la app.");
await openBrowser(url);
