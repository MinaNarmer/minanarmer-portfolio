import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface TechContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function TechContentLayout({ title, description, children }: TechContentLayoutProps) {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{title} | MinaNarmer</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/#tech-blog">
            <Button variant="ghost" className="mb-6 text-primary-color hover:text-primary-color-dark">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("tech.backToTopics") || "Back to Topics"}
            </Button>
          </Link>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark-color dark:text-light-color">
            {title}
          </h1>
          
          <p className="text-xl text-dark-color dark:text-light-color-darker">
            {description}
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </>
  );
}