import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/home/HeroSection";
import BioSection from "@/components/home/BioSection";
import Terminal from "@/components/home/Terminal";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TechBlogSection from "@/components/blog/TechBlogSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  // Smooth scroll to section on load if hash exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>{t("seo.home.title")} | MinaNarmer</title>
        <meta name="description" content={t("seo.home.description")} />
        <meta property="og:title" content={`${t("seo.home.title")} | MinaNarmer`} />
        <meta property="og:description" content={t("seo.home.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minanarmer.dev" />
        <html lang={i18n.language} />
      </Helmet>
      
      <main className="pt-20 pb-8">
        <HeroSection />
        <BioSection />
        <ProjectsSection />
        <TechBlogSection />
        <ContactSection />
      </main>
    </>
  );
}
