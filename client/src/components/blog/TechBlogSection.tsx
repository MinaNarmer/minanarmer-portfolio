import { useTranslation } from "react-i18next";
import TechBlogCard, { TechTopic } from "./TechBlogCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { 
  Code, 
  Cog, 
  LucideProps, 
  Clipboard, 
  Brain, 
  Database,
  Sparkles
} from "lucide-react";

// Custom icons for React and Angular
const ReactIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
      <animate
        attributeName="stroke-dashoffset"
        dur="1.5s"
        from="32"
        to="0"
        fill="freeze"
      />
    </circle>
    <circle cx="12" cy="12" r="6" strokeDasharray="19" strokeDashoffset="19">
      <animate
        attributeName="stroke-dashoffset"
        dur="1.5s"
        from="19"
        to="0"
        fill="freeze"
      />
    </circle>
  </svg>
);

const AngularIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

// Combine Angular and React icons side by side
const FrontendIcons = (props: LucideProps) => (
  <div className="flex space-x-1 items-center">
    <AngularIcon {...props} />
    <ReactIcon {...props} />
  </div>
);

export default function TechBlogSection() {
  const { t } = useTranslation();
  
  // Define tech topics with translation keys
  const techTopics: TechTopic[] = [
    {
      id: "0",
      title: t("techTopics.kidsProgramming.title", "Kids Programming & Computer Learning Roadmap"),
      description: t("techTopics.kidsProgramming.description", "A comprehensive guide to teaching children about computers, programming, and AI concepts."),
      icon: <Sparkles size={36} className="text-yellow-500" />,
      slug: "kids-programming-roadmap"
    },
    {
      id: "1",
      title: t("techTopics.dotnet.title", ".NET Roadmap"),
      description: t("techTopics.dotnet.description", "A comprehensive guide to mastering .NET development and building scalable applications."),
      icon: <Code size={36} className="text-blue-500" />,
      slug: "dotnet-roadmap"
    },
    {
      id: "2",
      title: t("techTopics.devops.title", "DevOps Essentials"),
      description: t("techTopics.devops.description", "Learn the core principles, practices, and tools for effective DevOps implementation."),
      icon: <Cog size={36} className="text-indigo-500" />,
      slug: "devops-essentials"
    },
    {
      id: "3",
      title: t("techTopics.frontend.title", "Frontend Roadmap"),
      description: t("techTopics.frontend.description", "Master Angular and React to build modern, responsive user interfaces."),
      icon: <FrontendIcons size={36} className="text-red-500" />,
      slug: "frontend-roadmap"
    },
    {
      id: "4",
      title: t("techTopics.project.title", "Project Management Roadmap"),
      description: t("techTopics.project.description", "A guide to Agile methodologies, Scrum, and effective project leadership."),
      icon: <Clipboard size={36} className="text-green-500" />,
      slug: "project-management"
    },
    {
      id: "5",
      title: t("techTopics.ai.title", "Understanding AI for Developers"),
      description: t("techTopics.ai.description", "Explore AI concepts, models, and integration strategies for software developers."),
      icon: <Brain size={36} className="text-purple-500" />,
      slug: "ai-for-developers"
    },
    {
      id: "6",
      title: t("techTopics.database.title", "Database Architecture & Performance"),
      description: t("techTopics.database.description", "Best practices for designing robust, high-performance database systems at scale."),
      icon: <Database size={36} className="text-amber-500" />,
      slug: "database-architecture"
    }
  ];
  
  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-dark-color dark:text-light-color code-bracket">
          {t("tech.title") || "Tech Blog"}
        </h2>
        <p className="text-lg text-dark-color dark:text-light-color-darker max-w-xl mx-auto">
          {t("tech.description") || "Explore guides and roadmaps on key technology topics to advance your development skills."}
        </p>
      </div>
      
      {/* Tech Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techTopics.map((topic) => (
          <TechBlogCard key={topic.id} topic={topic} />
        ))}
      </div>
      
      {/* More Articles Button */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          className="border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white transition-colors"
        >
          {t("tech.viewAll") || "View All Articles"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}