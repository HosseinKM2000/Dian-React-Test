import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json";
import fa from "./i18n/fa.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
