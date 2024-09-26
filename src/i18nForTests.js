import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { englishTranslation, germanTranslation } from "./I18nLanguages";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: { ...englishTranslation },
      },
      de: {
        translation: { ...germanTranslation },
      },
    },
  });

export default i18n;
