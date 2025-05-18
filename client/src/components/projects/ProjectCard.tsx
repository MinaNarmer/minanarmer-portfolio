import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@shared/schema";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const { title, description, image, tags, demoUrl, codeUrl, featured } = project;
  
  return (
    <Card className="project-card overflow-hidden shadow-lg border border-light-color-darker dark:border-dark-color">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-0 right-0 bg-primary-color text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
            {t("projects.featured")}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 text-dark-color dark:text-light-color">{title}</h3>
        <p className="mb-4 text-dark-color dark:text-light-color-darker">{description}</p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            // Map tags to specific classes instead of dynamic class names
            let badgeClass = "";
            
            if (tag.includes(".NET")) {
              badgeClass = "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
            } else if (tag.includes("Angular")) {
              badgeClass = "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
            } else if (tag.includes("React")) {
              badgeClass = "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100"; 
            } else if (tag.includes("Node.js")) {
              badgeClass = "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
            } else if (tag.includes("TypeScript")) {
              badgeClass = "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
            } else if (tag.includes("Python")) {
              badgeClass = "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
            } else if (tag.includes("TensorFlow") || tag.includes("PyTorch")) {
              badgeClass = "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100";
            } else if (tag.includes("Docker")) {
              badgeClass = "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
            } else if (tag.includes("SQL")) {
              badgeClass = "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100";
            } else if (tag.includes("MongoDB")) {
              badgeClass = "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
            } else if (tag.includes("Azure") || tag.includes("AWS")) {
              badgeClass = "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
            } else {
              // Default to purple if no match
              badgeClass = "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
            }
            
            return (
              <Badge 
                key={index} 
                variant="outline" 
                className={badgeClass}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4 rtl:space-x-reverse">
          {codeUrl && (
            <a 
              href={codeUrl} 
              className="text-primary-color hover:text-primary-color-dark flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-1" />
              {t("projects.code")}
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="text-primary-color hover:text-primary-color-dark flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              {t("projects.demo")}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
