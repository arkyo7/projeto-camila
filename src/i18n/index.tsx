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

const dictionaries: Record<Language, Dictionary> = {
  pt: ptBR,
  it: itIT,
};

export const htmlLang: Record<Language, string> = {
  pt: "pt-BR",
  it: "it-IT",
};

const STORAGE_KEY = "cm-lang";

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
    if (stored === "pt" || stored === "it") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}