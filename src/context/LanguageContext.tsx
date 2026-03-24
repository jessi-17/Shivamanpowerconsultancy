"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "pa";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("siteLang") as Lang | null;
    if (stored === "pa" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    const next: Lang = lang === "en" ? "pa" : "en";
    setLang(next);
    localStorage.setItem("siteLang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
