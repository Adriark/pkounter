(() => {
  const TEXT = {
    es: {
      builderButton: "Builder",
      languageLabel: "Idioma",
    },
    en: {
      builderButton: "Builder",
      languageLabel: "Language",
    },
  };
  const LANGUAGES = new Set(["es", "en"]);
  const LANGUAGE_ORDER = ["en", "es"];
  const LANGUAGE_NAMES = { es: "Español", en: "English" };
  const STORAGE_KEY = "champions-core-builder";

  function getSavedLanguage() {
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

    document.querySelectorAll("[data-about-lang]").forEach((node) => {
      node.hidden = node.dataset.aboutLang !== language;
    });

    document.querySelectorAll("[data-about-i18n]").forEach((node) => {
      const key = node.dataset.aboutI18n;
      node.textContent = TEXT[language][key] || node.textContent;
    });

    const languageButtons = [...document.querySelectorAll("[data-about-language]")];
    LANGUAGE_ORDER.forEach((code) => {
      const button = languageButtons.find((item) => item.dataset.aboutLanguage === code);
      if (button) button.parentElement?.appendChild(button);
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.aboutLanguage === language;
      button.textContent = LANGUAGE_NAMES[button.dataset.aboutLanguage] || button.textContent;
      button.hidden = false;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    persistLanguage(language);
  }

  applyLanguage(getSavedLanguage());

  document.querySelectorAll("[data-about-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.aboutLanguage));
  });
})();
