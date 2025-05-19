import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locales/en/translation.json";
import arTranslation from "../locales/ar/translation.json";
import deTranslation from "../locales/de/translation.json";
import itTranslation from "../locales/it/translation.json";
import frTranslation from "../locales/fr/translation.json";
import esTranslation from "../locales/es/translation.json";

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      },
      de: {
        translation: deTranslation
      },
      it: {
        translation: itTranslation
      },
      fr: {
        translation: frTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "language",
      caches: ["localStorage"]
    },
    // These settings help with language switching
    react: {
      useSuspense: true,
    },
    load: 'languageOnly',
    returnNull: false,
  });

// Set initial language from localStorage or browser
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
}

export default i18n;
