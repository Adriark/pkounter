@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo No encuentro Node.js. Instala Node.js o abre esta carpeta desde Codex para actualizar los datos.
  pause
  exit /b 1
)
node scripts\start-app.mjs
if errorlevel 1 pause
