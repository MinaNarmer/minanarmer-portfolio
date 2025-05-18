import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  direction: "ltr" | "rtl";
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  direction: "ltr",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  
  // Initialize from localStorage or fallback to i18n.language
  const savedLanguage = localStorage.getItem("language");
  console.log("Initializing language context, saved language:", savedLanguage);
  const initialLanguage = savedLanguage || i18n.language || "en";
  console.log("Initial language set to:", initialLanguage);
  
  const [language, setLanguageState] = useState<string>(initialLanguage);
  const [direction, setDirection] = useState<"ltr" | "rtl">(initialLanguage === "ar" ? "rtl" : "ltr");
  
  // Initialize the language when component mounts
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, []);
  
  const setLanguage = (lang: string) => {
    console.log("Changing language to:", lang);
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Apply RTL/LTR styling immediately
    if (lang === "ar") {
      document.documentElement.classList.add("rtl");
      document.body.setAttribute("dir", "rtl");
    } else {
      document.documentElement.classList.remove("rtl");
      document.body.setAttribute("dir", "ltr");
    }
  };
  
  useEffect(() => {
    // Set direction based on language
    const isRTL = language === "ar";
    setDirection(isRTL ? "rtl" : "ltr");
    
    // Update document attributes
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    
    // Add or remove RTL class to html
    if (isRTL) {
      document.documentElement.classList.add("rtl");
      document.body.dir = "rtl";
    } else {
      document.documentElement.classList.remove("rtl");
      document.body.dir = "ltr";
    }
    
    // Update language in localStorage
    localStorage.setItem("language", language);
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
