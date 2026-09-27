import { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en";
import kh from "../translations/kh";

const LanguageContext = createContext();

const translations = {
  en,
  kh,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(function () {
    const savedLanguage = localStorage.getItem("khmer-life-helper-language");

    return savedLanguage === "kh" ? "kh" : "en";
  });

  useEffect(
    function () {
      localStorage.setItem("khmer-life-helper-language", language);

      // Remove old language classes
      document.body.classList.remove("english");
      document.body.classList.remove("khmer");

      // Add current language class
      if (language === "kh") {
        document.body.classList.add("khmer");
      } else {
        document.body.classList.add("english");
      }

      // Set HTML language
      document.documentElement.lang = language === "kh" ? "km" : "en";
    },
    [language],
  );

  function changeLanguage(newLanguage) {
    if (newLanguage === "en" || newLanguage === "kh") {
      setLanguage(newLanguage);
    }
  }

  function t(key) {
    const keys = key.split(".");
    let value = translations[language];

    for (const item of keys) {
      value = value?.[item];
    }

    return value || key;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
