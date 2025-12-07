import { createI18n } from "vue-i18n";
import en from "../src/locales/en.json";
import es from "../src/locales/es.json";

const messages = {
  en,
  es,
};

const defaultLocale =
  (typeof localStorage !== "undefined" && localStorage.getItem("locale")) || "es";

export default function setupI18n() {
  const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "en",
    messages,
  });

  return i18n;
}
