import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import i18n from "@/lib/i18n";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(language);
  
  // Keep activeLanguage in sync with language from context
  useEffect(() => {
    setActiveLanguage(language);
    console.log("Language updated in Navbar:", language);
  }, [language]);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home"), isHash: false },
    { href: "/resume", label: t("nav.resume"), isHash: false },
    { href: "/projects", label: t("nav.projects"), isHash: false },
    { href: "/#clients", label: t("nav.clients"), isHash: true },
    { href: "/#blog", label: t("nav.blog"), isHash: true },
    { href: "/#contact", label: t("nav.contact"), isHash: true }
  ];

  const languages = [
    { code: "en", name: "English", display: "EN" },
    { code: "de", name: "Deutsch", display: "DE" },
    { code: "fr", name: "Français", display: "FR" },
    { code: "es", name: "Español", display: "ES" },
    { code: "it", name: "Italiano", display: "IT" }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <span className="font-display font-bold text-xl text-blue-600">&lt;MinaNarmer /&gt;</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="space-x-4 rtl:space-x-reverse">
                {navLinks.map((link) => 
                  link.isHash ? (
                    <Link
                      key={link.href}
                      href="/"
                      onClick={(e) => {
                        if (location !== "/") {
                          // We need to navigate to home first
                          // The link will handle the navigation
                        } else {
                          // If we're already on the home page, just scroll to the section
                          e.preventDefault();
                          const sectionId = link.href.split("#")[1];
                          const element = document.getElementById(sectionId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className={`px-3 py-2 text-sm font-medium ${
                        location === "/"
                          ? "text-primary-color"
                          : "text-dark-color dark:text-light-color hover:text-primary-color dark:hover:text-primary-color"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium ${
                        location === link.href
                          ? "text-primary-color"
                          : "text-dark-color dark:text-light-color hover:text-primary-color dark:hover:text-primary-color"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* Language Switcher */}
            <div className="flex space-x-2 rtl:space-x-reverse mr-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    // Update our active language state immediately for UI feedback
                    setActiveLanguage(lang.code);
                    
                    // Then update the context and i18n
                    setLanguage(lang.code);
                    i18n.changeLanguage(lang.code);
                    
                    // Apply RTL immediately if Arabic
                    if (lang.code === "ar") {
                      document.documentElement.classList.add("rtl");
                      document.documentElement.setAttribute("dir", "rtl");
                      document.body.dir = "rtl";
                    } else {
                      document.documentElement.classList.remove("rtl");
                      document.documentElement.setAttribute("dir", "ltr");
                      document.body.dir = "ltr";
                    }
                    
                    // Store language selection in localStorage
                    localStorage.setItem("language", lang.code);
                    
                    console.log("Language button clicked:", lang.code);
                  }}
                  className={`flex items-center px-3 py-1.5 rounded-md transition-colors ${
                    activeLanguage === lang.code 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Switch to ${lang.name}`}
                >
                  {lang.display}

                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center">
              <button
                onClick={() => {
                  toggleTheme();
                  // Apply theme change immediately
                  document.documentElement.classList.toggle('dark');
                }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center ml-4 sm:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-dark-color dark:text-light-color hover:bg-light-color-darker dark:hover:bg-dark-color rounded-md p-2 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => 
            link.isHash ? (
              <Link
                key={link.href}
                href="/"
                onClick={(e) => {
                  if (location !== "/") {
                    // The Link will handle navigation to home
                  } else {
                    // If already on home page, just scroll to section
                    e.preventDefault();
                    const sectionId = link.href.split("#")[1];
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className={`block px-3 py-2 text-base font-medium ${
                  location === "/"
                    ? "text-primary-color"
                    : "text-dark-color dark:text-light-color hover:bg-light-color-darker dark:hover:bg-dark-color hover:text-primary-color"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium ${
                  location === link.href
                    ? "text-primary-color"
                    : "text-dark-color dark:text-light-color hover:bg-light-color-darker dark:hover:bg-dark-color hover:text-primary-color"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <Separator />
      </div>
    </nav>
  );
}
