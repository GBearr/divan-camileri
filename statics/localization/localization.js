import LocalizedStrings from "react-localization";

const DEFAULT_LANGUAGE = "eng";

const isBrowser = typeof window !== "undefined";

let localizationStrings = new LocalizedStrings({
  eng: {
    name: "Kastamonu Divan Mosques",
    home: "Home",
    risk: "Risk Assessment",
    values: "Values Assessment",
    inventroy: "Digital Inventory",
    contact: "Contact",
  },
  tr: {
    name: "Kastamonu Divan Camileri",
    home: "Ana Sayfa",
    risk: "Risk Analizi",
    values: "Değer Analizi",
    inventroy: "Dijital Envanter",
    contact: "İletişim",
  },
});

if (isBrowser) {
  let lang = localStorage.getItem("language");
  if (!lang) {
    lang = DEFAULT_LANGUAGE;
    localStorage.setItem("language", DEFAULT_LANGUAGE);
  }
  localizationStrings.setLanguage(lang || DEFAULT_LANGUAGE);
} else {
  localizationStrings.setLanguage(DEFAULT_LANGUAGE);
}

export default localizationStrings;
