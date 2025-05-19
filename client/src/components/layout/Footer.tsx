import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  
  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/resume", label: t("nav.resume") },
    { href: "#clients", label: t("nav.clients") },
    { href: "#blog", label: t("nav.blog") },
    { href: "#contact", label: t("nav.contact") }
  ];
  
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" }
  ];
  
  return (
    <footer className="bg-dark-color-deeper text-light-color py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 footer-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-bold mb-4">&lt;MinaNarmer /&gt;</h3>
            <p className="mb-4 max-w-md text-light-color-darker">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://github.com/MinaNarmer" target="_blank" rel="noopener noreferrer" className="text-light-color-darker hover:text-primary-color transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/minayousef/" target="_blank" rel="noopener noreferrer" className="text-light-color-darker hover:text-primary-color transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://wa.me/201003260417" target="_blank" rel="noopener noreferrer" className="text-light-color-darker hover:text-primary-color transition-colors" aria-label="WhatsApp">
                <Phone size={22} />
              </a>
              <a href="mailto:Minaibrahem.youssef@gmail.com" className="text-light-color-darker hover:text-primary-color transition-colors" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-light-color-darker hover:text-primary-color transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">{t("footer.languages")}</h4>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className="text-light-color-darker hover:text-primary-color transition-colors text-left w-full"
                  >
                    {lang.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-dark-color text-center text-light-color-darker">
          <p>© {new Date().getFullYear()} MinaNarmer. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}
