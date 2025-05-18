import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("notFound.title")} | MinaNarmer</title>
        <meta name="description" content={t("notFound.description")} />
      </Helmet>
      
      <div className="min-h-screen w-full flex items-center justify-center bg-light-color dark:bg-dark-color-deeper pt-20">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-dark-color dark:text-light-color">
                {t("notFound.title")}
              </h1>
            </div>

            <p className="mt-4 text-sm text-dark-color dark:text-light-color-darker mb-6">
              {t("notFound.message")}
            </p>
            
            <Link href="/">
              <Button>
                {t("notFound.backHome")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
