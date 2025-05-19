import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Helmet } from "react-helmet";

export default function Projects() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("projects.pageTitle")} | Mina Narmer</title>
        <meta name="description" content={t("projects.pageDescription")} />
      </Helmet>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Code className="w-20 h-20 mx-auto text-primary-color" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-color">
            {t("projects.comingSoon")}
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl mb-10">
            <p className="text-xl text-gray-300 mb-8">
              {t("projects.comingSoonDescription")}
            </p>
            
            <Link href="/">
              <div className={`inline-flex items-center px-6 py-3 bg-primary-color hover:bg-primary-color-dark text-white font-medium rounded-md transition-colors cursor-pointer ${
                direction === "rtl" ? "flex-row-reverse" : ""
              }`}>
                <ArrowLeft className={`w-5 h-5 ${direction === "rtl" ? "ml-2 transform rotate-180" : "mr-2"}`} />
                {t("projects.backHome")}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}