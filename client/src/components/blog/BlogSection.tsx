import { useTranslation } from "react-i18next";
import BlogPostCard from "./BlogPostCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { t } = useTranslation();
  
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blogposts'],
  });
  
  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-dark-color dark:text-light-color code-bracket">
          {t("blog.title")}
        </h2>
        <p className="text-lg text-dark-color dark:text-light-color-darker max-w-xl mx-auto">
          {t("blog.description")}
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {isLoading ? (
          // Show skeleton loaders while loading
          Array(2).fill(0).map((_, i) => (
            <div key={i} className="bg-white dark:bg-dark-color-deeper rounded-lg overflow-hidden shadow-lg border border-light-color-darker dark:border-dark-color animate-pulse">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded-md" />
                  <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded-md" />
                </div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-3 w-3/4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-3 w-full" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-3 w-5/6" />
                <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-md mb-4" />
              </div>
              <div className="px-6 pb-6">
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded-md" />
              </div>
            </div>
          ))
        ) : (
          posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))
        )}
      </div>
      
      {/* More Articles Button */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          className="border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white transition-colors"
        >
          {t("blog.viewAll")}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
