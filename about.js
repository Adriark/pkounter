(() => {
  const TEXT = {
    es: {
      builderButton: "Builder",
      aboutButton: "Sobre Pkounter",
      levelRule: "Nivel 50",
    },
    en: {
      builderButton: "Builder",
      aboutButton: "About Pkounter",
      levelRule: "Level 50",
    },
  };

  function getSavedLanguage() {
    try {
      const saved = JSON.parse(localStorage.getItem("champions-core-builder") || "{}")?.selectedLanguage;
      return saved === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  }

  const language = getSavedLanguage();

  document.documentElement.lang = language;
  document.body.dataset.language = language;

  document.querySelectorAll("[data-about-lang]").forEach((node) => {
    node.hidden = node.dataset.aboutLang !== language;
  });

  document.querySelectorAll("[data-about-i18n]").forEach((node) => {
    const key = node.dataset.aboutI18n;
    node.textContent = TEXT[language][key] || node.textContent;
  });
})();
