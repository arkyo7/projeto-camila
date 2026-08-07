import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { siteConfig, type Language } from "@/config/siteConfig";
import { ptBR, type Dictionary } from "./pt-BR";
import { itIT } from "./it-IT";
import { esES } from "./es-ES";
import { enUS } from "./en-US";

const dictionaries: Record<Language, Dictionary> = {
  pt: ptBR,
  it: itIT,
  es: esES,
  en: enUS,
};

export const htmlLang: Record<Language, string> = {
  pt: "pt-BR",
  it: "it-IT",
  es: "es-ES",
  en: "en-US",
};

/** Opções exibidas no seletor de idioma do cabeçalho. */
export const languageOptions: { code: Language; code2: string; label: string }[] = [
  { code: "pt", code2: "PT", label: "Português" },
  { code: "it", code2: "IT", label: "Italiano" },
  { code: "es", code2: "ES", label: "Español" },
  { code: "en", code2: "EN", label: "English" },
];

const STORAGE_KEY = "bsf-lang";

interface I18nValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(siteConfig.defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (siteConfig.languages as readonly string[]).includes(stored)) {
      setLangState(stored as Language);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
