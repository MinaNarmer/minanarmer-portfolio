import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import Terminal from "./Terminal";
import { useLanguage } from "@/context/LanguageContext";
import profileImage from "@/assets/profile-new.png";
import egyptianCodeBg from "@/assets/egyptian-code-bg.png";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  
  return (
    <section 
      id="home" 
      className="relative py-16 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${egyptianCodeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay and content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-in bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="flex-shrink-0">
                <img 
                  src={profileImage} 
                  alt="Mina Narmer" 
                  className="w-28 h-28 object-cover rounded-full border-4 border-primary-color shadow-lg" 
                />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white text-start rtl:text-right">
                {i18n.language === 'ar' ? (
                  <>
                    <span className="text-primary-color">{t("hero.hello")}</span>، {t("hero.im")} {t("hero.name")}
                  </>
                ) : (
                  <>
                    <span className="text-primary-color">{t("hero.hello")}</span>, {t("hero.im")} Mina Narmer
                  </>
                )}
              </h1>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-medium mb-6 text-blue-300 text-start rtl:text-right">
              {t("hero.title")}
            </h2>
            <p className="text-lg mb-8 text-gray-200 max-w-xl text-start rtl:text-right">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4 rtl:flex-row-reverse">
              <a 
                href="/projects" 
                onClick={(e) => {
                  e.preventDefault();
                  // استخدام history push بدلاً من تغيير window.location
                  // يحافظ على حالة React ولا يسبب إعادة تحميل كاملة
                  window.history.pushState({}, "", "/projects");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="px-6 py-3 bg-primary-color hover:bg-primary-color-dark text-white font-medium rounded-md transition-colors flex items-center rtl:flex-row-reverse cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {t("hero.viewProjects")}
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-md transition-colors flex items-center rtl:flex-row-reverse"
              >
                <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("hero.contactMe")}
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
