(() => {
  const STORAGE_KEY = "champions-core-builder";
  const LANGUAGES = new Set(["es", "en"]);
  const LANGUAGE_ORDER = ["en", "es"];
  const LANGUAGE_NAMES = { es: "Español", en: "English" };
  const TEXT = {
    es: {
      bannerAlt: "Pkounter: Construye tus equipos, estudia la sinergia, elimina tus counters",
      languageLabel: "Idioma",
      kicker: "Teambuilding asistido para Champions",
      title: "Construye equipos con contexto real del meta.",
      copy: "Pkounter te ayuda a montar equipos, revisar amenazas, importar y exportar sets en formato Showdown y tomar decisiones con datos de uso, roles, tipos, movimientos y objetos del formato seleccionado.",
      startButton: "Empezar a construir",
    },
    en: {
      bannerAlt: "Pkounter: Build your teams, study the synergy, finish your counters",
      languageLabel: "Language",
      kicker: "Assisted teambuilding for Champions",
      title: "Build teams with real metagame context.",
      copy: "Pkounter helps you build teams, review threats, import and export Showdown sets, and make decisions with usage data, roles, types, moves, and items from the selected format.",
      startButton: "Start building",
    },
  };
  const BANNERS = {
    es: "/assets/Banner-Pkounter-inicio-ESP.jpg?v=1",
    en: "/assets/Banner-Pkounter-inicio-ENG.jpg?v=1",
  };

  function savedLanguage() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")?.selectedLanguage;
      if (LANGUAGES.has(saved)) return saved;
    } catch {
      // Ignore broken local storage and fall back to English.
    }
    return "en";
  }

  function persistLanguage(language) {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...saved, selectedLanguage: language }));
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ selectedLanguage: language }));
    }
  }

  function applyLanguage(language) {
    if (!LANGUAGES.has(language)) return;
    document.documentElement.lang = language;
    document.body.dataset.language = language;
    document.querySelectorAll("[data-landing-i18n]").forEach((node) => {
      const key = node.dataset.landingI18n;
      node.textContent = TEXT[language][key] || node.textContent;
    });
    document.querySelectorAll("[data-landing-lang]").forEach((node) => {
      node.hidden = node.dataset.landingLang !== language;
    });
    const banner = document.querySelector("#landing-banner");
    if (banner) {
      banner.src = BANNERS[language];
      banner.alt = TEXT[language].bannerAlt;
    }
    const languageButtons = [...document.querySelectorAll("[data-landing-language]")];
    LANGUAGE_ORDER.forEach((code) => {
      const button = languageButtons.find((item) => item.dataset.landingLanguage === code);
      if (button) button.parentElement?.appendChild(button);
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.landingLanguage === language;
      button.textContent = LANGUAGE_NAMES[button.dataset.landingLanguage] || button.textContent;
      button.hidden = false;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    persistLanguage(language);
  }

  applyLanguage(savedLanguage());

  document.querySelectorAll("[data-landing-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.landingLanguage));
  });
})();
