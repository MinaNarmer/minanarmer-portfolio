import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ClientCard from "./ClientCard";

export default function ClientsSection() {
  const { t } = useTranslation();
  
  // Define clients with their logos, names, and website URLs
  const clients = [
    {
      name: "Adnoc",
      logo: "https://www.adnoc.ae/-/media/adnoc-corporate/logo/adnoc-logo.png",
      websiteUrl: "https://www.adnoc.ae/",
    },
    {
      name: "CEPRES",
      logo: "https://cepres.com/wp-content/uploads/2022/03/cepres-logo.svg",
      websiteUrl: "https://cepres.com/"
    },
    {
      name: "Giza Systems",
      logo: "https://www.gizasystems.com/wp-content/uploads/2023/03/giza-systems-logo-hd-1-1.png",
      websiteUrl: "https://www.gizasystems.com/"
    },
    {
      name: "Bnsights",
      logo: "https://bnsights.com/wp-content/uploads/2021/11/bnsights-logo-1.png",
      websiteUrl: "https://bnsights.com/"
    },
    {
      name: "Al-Dawaa Pharmacies",
      logo: "https://play-lh.googleusercontent.com/FIXdSL4qeK-qvVB-n7tPzBQjcR6unp-gtUYxgS0jfMsf03KOdjpIz8nJJ1GZHEEiKaw=w240-h480-rw",
      websiteUrl: "https://www.al-dawaa.com/"
    },
    {
      name: "Microwize Technology",
      logo: "https://www.microwize.com/images/logo.png",
      websiteUrl: "https://www.microwize.com/"
    },
    {
      name: "Vosita",
      logo: "https://play-lh.googleusercontent.com/72pRtYPCsOCDrhsOhSlPG-DhbXiNyPLWnK1jM-bO-9AJUVYrhE9pOnBlRxZ4hIB-FA",
      websiteUrl: "https://vosita.com/"
    },
    {
      name: "Ibn Sina Pharma",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIQEV95Q-RRBDXl0OeTF60dSxl8yMSXFt3b7CsQ26JQ&s",
      websiteUrl: "https://ibnsina-pharma.com/"
    },
    {
      name: "Cura",
      logo: "https://www.cura.healthcare/img/cura-logo.png",
      websiteUrl: "https://www.cura.healthcare/"
    },
    // Confidential clients card
    {
      name: t("projects.confidential"),
      logo: "",
      isConfidential: true,
      tooltipText: t("projects.confidentialTooltip")
    }
  ];
  
  return (
    <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-light-color dark:bg-dark-color">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-dark-color dark:text-light-color code-bracket">
          {t("projects.title")}
        </h2>
        <p className="text-lg text-dark-color dark:text-light-color-darker max-w-xl mx-auto">
          {t("projects.description")}
        </p>
      </div>
      
      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <ClientCard 
            key={index} 
            name={client.name} 
            logo={client.logo} 
            websiteUrl={client.websiteUrl}
            isConfidential={client.isConfidential}
            tooltipText={client.tooltipText}
          />
        ))}
      </div>
      
      {/* More Clients Button */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          className="border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white transition-colors"
        >
          {t("projects.viewMore")}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}