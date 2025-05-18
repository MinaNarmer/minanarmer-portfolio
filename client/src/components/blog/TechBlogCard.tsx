import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export type TechTopic = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
};

interface TechBlogCardProps {
  topic: TechTopic;
}

export default function TechBlogCard({ topic }: TechBlogCardProps) {
  const { t } = useTranslation();
  
  return (
    <Link href={`/tech/${topic.slug}`}>
      <Card className="bg-white dark:bg-dark-color-deeper overflow-hidden shadow-lg border border-light-color-darker dark:border-dark-color flex flex-col h-full cursor-pointer hover:shadow-xl hover:border-primary-color transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-6 flex-grow">
          <div className="mb-4 text-primary-color flex justify-center">
            {/* Icon container with uniform size for all icons */}
            <div className="w-16 h-16 flex items-center justify-center">
              {topic.icon}
            </div>
          </div>
          <h3 className="font-display text-xl font-semibold mb-3 text-dark-color dark:text-light-color text-center">
            {topic.title}
          </h3>
          <div className="text-dark-color dark:text-light-color-darker">
            <p className="mb-3 text-center">{topic.description}</p>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 mt-auto flex justify-center">
          <div className="text-primary-color hover:text-primary-color-dark inline-flex items-center font-medium">
            <span>{t("tech.readMore")}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}