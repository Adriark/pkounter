(function () {
  const STORAGE_KEY = "champions-core-builder";
  const REDIRECT_DELAY_MS = 1200;

  const TEXT = {
    en: {
      kicker: "Pkounter account",
      title: "Create a new password",
      copy: "Enter your new password to finish recovering your account.",
      passwordLabel: "New password",
      confirmLabel: "Repeat password",
      submit: "Update password",
      back: "Back to builder",
      checking: "Checking recovery link...",
      invalidLink: "This recovery link is invalid or expired. Request a new reset email from the login modal.",
      mismatch: "Passwords do not match.",
      minLength: "Password must be at least 8 characters.",
      success: "Password updated. Taking you back to the builder...",
      generic: "We could not update your password. Please try again.",
      missingBridge: "Supabase is not available.",
    },
    es: {
      kicker: "Cuenta de Pkounter",
      title: "Crea una nueva contraseña",
      copy: "Introduce tu nueva contraseña para terminar la recuperación de la cuenta.",
      passwordLabel: "Nueva contraseña",
      confirmLabel: "Repite la contraseña",
      submit: "Cambiar contraseña",
      back: "Volver al builder",
      checking: "Comprobando enlace de recuperación...",
      invalidLink: "Este enlace de recuperación no es válido o ha caducado. Pide otro email de recuperación desde el modal de login.",
      mismatch: "Las contraseñas no coinciden.",
      minLength: "La contraseña debe tener al menos 8 caracteres.",
      success: "Contraseña actualizada. Volviendo al builder...",
      generic: "No hemos podido cambiar la contraseña. Inténtalo de nuevo.",
      missingBridge: "Supabase no está disponible.",
    },
  };

  let language = initialLanguage();

  function initialLanguage() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved?.selectedLanguage === "es" || saved?.language === "es") return "es";
      if (saved?.selectedLanguage === "en" || saved?.language === "en") return "en";
    } catch (_) {
      // Keep the reset page usable even if storage contains old/broken data.
    }
    return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
  }

  function t(key) {
    return TEXT[language]?.[key] || TEXT.en[key] || key;
  }

  function persistLanguage(nextLanguage) {
    language = nextLanguage === "es" ? "es" : "en";
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      saved.selectedLanguage = language;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch (_) {
      // Language persistence is nice-to-have here, not required for password recovery.
    }
    renderLanguage();
  }

  function renderLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-reset-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.resetI18n);
    });
    document.querySelectorAll("[data-reset-lang]").forEach((button) => {
      const active = button.dataset.resetLang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setMessage(message, tone = "") {
    const node = document.querySelector("[data-reset-message]");
    if (!node) return;
    node.hidden = !message;
    node.textContent = message;
    node.dataset.tone = tone;
  }

  function bridge() {
    return window.PKOUNTER_SUPABASE;
  }

  function queryParams() {
    return new URLSearchParams(window.location.search);
  }

  function hashParams() {
    return new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
  }

  function hasRecoveryParams() {
    const query = queryParams();
    const hash = hashParams();
    return query.has("code") || query.get("type") === "recovery" || hash.get("type") === "recovery" || hash.has("access_token");
  }

  async function waitForSession(client) {
    for (let i = 0; i < 16; i += 1) {
      const { data } = await client.auth.getSession();
      if (data?.session) return data.session;
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    return null;
  }

  async function prepareRecoverySession() {
    const api = bridge();
    if (!api?.available || !api.client?.auth) {
      setMessage(t("missingBridge"), "error");
      disableForm(true);
      return;
    }

    if (!hasRecoveryParams()) return;

    setMessage(t("checking"), "info");
    const code = queryParams().get("code");
    try {
      if (code) {
        const { error } = await api.client.auth.exchangeCodeForSession(code);
        if (error) throw error;
      }
      const session = await waitForSession(api.client);
      if (!session) throw new Error(t("invalidLink"));
      window.history.replaceState({}, document.title, "/reset-password/");
      setMessage("");
    } catch (error) {
      setMessage(error?.message || t("invalidLink"), "error");
      disableForm(true);
    }
  }

  function disableForm(disabled) {
    document.querySelectorAll("[data-reset-form] input, [data-reset-submit]").forEach((node) => {
      node.disabled = disabled;
    });
  }

  function translatedError(error) {
    const raw = String(error?.message || error || "").trim();
    const id = raw.toLowerCase().replace(/[^a-z0-9]+/g, "");
    if (!raw) return t("generic");
    if (id.includes("session") || id.includes("expired") || id.includes("invalid")) return t("invalidLink");
    if (id.includes("password") && (id.includes("8") || id.includes("minimum"))) return t("minLength");
    return raw;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const api = bridge();
    if (!api?.available) {
      setMessage(t("missingBridge"), "error");
      return;
    }
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const password = String(data.password || "");
    const confirm = String(data.confirm || "");
    if (password.length < 8) {
      setMessage(t("minLength"), "error");
      return;
    }
    if (password !== confirm) {
      setMessage(t("mismatch"), "error");
      return;
    }

    disableForm(true);
    setMessage("");
    try {
      await api.auth.updatePassword(password);
      setMessage(t("success"), "success");
      setTimeout(() => {
        window.location.assign("/building/");
      }, REDIRECT_DELAY_MS);
    } catch (error) {
      setMessage(translatedError(error), "error");
      disableForm(false);
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    renderLanguage();
    document.querySelectorAll("[data-reset-lang]").forEach((button) => {
      button.addEventListener("click", () => persistLanguage(button.dataset.resetLang));
    });
    document.querySelector("[data-reset-form]")?.addEventListener("submit", handleSubmit);
    await prepareRecoverySession();
  });
}());
