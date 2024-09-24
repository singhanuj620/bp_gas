import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { englishTranslation, germanTranslation } from "./I18nLanguages";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: { ...englishTranslation },
      },
      de: {
        translation: { ...germanTranslation },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
