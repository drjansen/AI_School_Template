"use client";
import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import type { Lang, Translations } from "@/lib/i18n/types";
import { translations } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "eldarin_lang";

function getLangFromStorage(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "ko" || stored === "en") return stored;
  } catch {
    /* localStorage unavailable */
  }
  return "ko";
}

// Returns 'ko' during SSR; React switches to client snapshot after hydration.
function getServerSnapshot(): Lang {
  return "ko";
}

// Subscribe to cross-tab storage events so useSyncExternalStore re-reads.
function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore: server renders 'ko', client reads localStorage.
  const lang = useSyncExternalStore(subscribe, getLangFromStorage, getServerSnapshot);

  // Sync <html lang> attribute with current language (external DOM update).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
      // Manually dispatch a storage event so useSyncExternalStore re-evaluates
      // within the same tab (the native 'storage' event only fires in other tabs).
      window.dispatchEvent(
        new StorageEvent("storage", { key: STORAGE_KEY, newValue: next })
      );
    } catch {
      /* ignore */
    }
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

