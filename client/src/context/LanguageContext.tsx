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
  // Only allow en, de, or it as valid languages (ar removed)
  const validLanguages = ["en", "de", "it"];
  const initialLanguage = validLanguages.includes(savedLanguage || "") 
    ? savedLanguage || "en"
    : "en";
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
    // Only allow en, de, or it as valid languages
    const validLanguages = ["en", "de", "it"];
    if (!validLanguages.includes(lang)) {
      lang = "en"; // Default to English if invalid language
    }
    
    console.log("Changing language to:", lang);
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Since we removed Arabic, no more RTL
    document.documentElement.classList.remove("rtl");
    document.body.setAttribute("dir", "ltr");
  };
  
  useEffect(() => {
    // All languages are LTR now (Arabic removed)
    setDirection("ltr");
    
    // Update document attributes
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", "ltr");
    
    // Remove RTL class from html (Arabic has been removed)
    document.documentElement.classList.remove("rtl");
    document.body.dir = "ltr";
    
    // Update language in localStorage
    localStorage.setItem("language", language);
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
