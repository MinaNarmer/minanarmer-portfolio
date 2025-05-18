import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { t } = useTranslation();
  const { title, excerpt, content, category, date, slug } = post;
  
  // Format date based on current language
  const { i18n } = useTranslation();
  const formattedDate = new Date(date).toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Card className="bg-white dark:bg-dark-color-deeper overflow-hidden shadow-lg border border-light-color-darker dark:border-dark-color flex flex-col h-full">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 text-sm">
          <span className="text-primary-color font-medium">{category}</span>
          <span>•</span>
          <span className="text-dark-color dark:text-light-color-darker">{formattedDate}</span>
        </div>
        <h3 className="font-display text-xl font-semibold mb-3 text-dark-color dark:text-light-color hover:text-primary-color transition-colors">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        <div className="blog-content mb-4 text-dark-color dark:text-light-color-darker">
          <p className="mb-3">{excerpt}</p>
          {content && (
            <div className="bg-dark-color-deeper text-light-color p-4 rounded-md font-code text-sm overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 mt-auto">
        <a 
          href={`/blog/${slug}`} 
          className="text-primary-color hover:text-primary-color-dark inline-flex items-center font-medium"
        >
          <span>{t("blog.readFull")}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
