import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { translations } from "../i18n/translations";
import type { Locale } from "../types/content";

const LanguageContext = createContext<ReturnType<typeof createLanguageValue> | null>(null);
function createLanguageValue(locale: Locale, setLocaleState: (value: Locale) => void) {
  const setLocale = (value: Locale) => {
    localStorage.setItem("evg-locale", value);
    setLocaleState(value);
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (["pt-br", "en", "es"].includes(parts[0])) parts[0] = value; else parts.unshift(value);
    window.history.replaceState({}, "", `/${parts.join("/")}${window.location.hash}`);
  };
  return { locale, setLocale, copy: translations[locale] };
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => (localStorage.getItem("evg-locale") as Locale) || "pt-br");
  const value = useMemo(() => createLanguageValue(locale, setLocaleState), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required");
  return value;
}
