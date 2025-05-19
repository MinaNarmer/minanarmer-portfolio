import { useTranslation } from "react-i18next";
import { useState } from "react";
import profileImage from "@/assets/profile-new.png";
import secondaryImage from "@/assets/profile-secondary.png";
import profileFamily from "@/assets/profile-family.png";
import profileStatue from "@/assets/profile-statue.png";
import profileView from "@/assets/profile-view.png";
import { Code, Database, Server, LayoutGrid, Cpu, GitBranch, LineChart, Activity, ChevronLeft, ChevronRight } from "lucide-react";

export default function BioSection() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState<number>(1);
  
  // All profile images array
  const profileImages = [
    { src: profileImage, location: "Cairo, Egypt" },
    { src: secondaryImage, location: "Switzerland" },
    { src: profileFamily, location: "Como, Italy" },
    { src: profileStatue, location: "Bern, Switzerland" },
    { src: profileView, location: "Zurich, Switzerland" }
  ];
  
  // Navigation functions for image carousel
  const nextImage = () => {
    setActiveImage((current) => (current === profileImages.length ? 1 : current + 1));
  };
  
  const prevImage = () => {
    setActiveImage((current) => (current === 1 ? profileImages.length : current - 1));
  };
  
  return (
    <section id="bio" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 opacity-20 dark:opacity-10">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-primary-color rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute right-32 top-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary-color rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t("bio.title")}
          </h2>
          <div className="w-20 h-1 bg-primary-color mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile image area with image switcher */}
          <div className="lg:col-span-2 flex flex-col items-center space-y-4">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-color to-secondary-color rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm shadow-2xl transform transition-all duration-500 hover:rotate-y-6">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Main image */}
                <img 
                  src={profileImages[activeImage - 1].src} 
                  alt={`Mina Youssef - ${profileImages[activeImage - 1].location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay with code-inspired design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="text-xs font-mono tracking-wide uppercase text-blue-300 mb-1 flex items-center">
                      <Code size={14} className="mr-1" /> Software.Engineer | PMP
                    </div>
                    <div className="text-xl font-display font-bold font-mono">Mina.Youssef<span className="text-primary-color">()</span></div>
                  </div>
                </div>
                
                {/* Tech indicators */}
                <div className="absolute top-3 right-3 flex space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.5s" }}></span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "1s" }}></span>
                </div>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-primary-color text-white hover:bg-primary-color/80 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              
              {/* Image indicators */}
              <div className="flex space-x-2">
                {profileImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index + 1)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeImage === index + 1 
                        ? 'bg-primary-color scale-125 shadow-lg' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-primary-color text-white hover:bg-primary-color/80 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            
            {/* Location tag */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary-color">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {profileImages[activeImage - 1].location}
            </div>
          </div>
          
          {/* Content area */}
          <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-gray-700 dark:text-gray-300 mb-6 relative">
                <span className="inline-block text-primary-color text-3xl font-mono absolute -left-6 opacity-70">&lt;</span>
                {t("bio.paragraph1")}
                <span className="inline-block text-primary-color text-3xl font-mono absolute -right-6 opacity-70">/&gt;</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t("bio.paragraph2")}
              </p>
            </div>
            
            {/* Skills with improved visualization */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <Cpu className="mr-2 text-primary-color" size={20} />
                {t("bio.skills")}
              </h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{t("bio.technical_skills")}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                  <SkillItem icon={<Code size={16} />} color="blue" name={t("bio.csharp")} />
                  <SkillItem icon={<Server size={16} />} color="green" name={t("bio.dotnet_core")} />
                  <SkillItem icon={<Database size={16} />} color="purple" name={t("bio.sql")} />
                  <SkillItem icon={<Server size={16} />} color="amber" name={t("bio.asp_net")} />
                  <SkillItem icon={<Cpu size={16} />} color="red" name={t("bio.ai")} />
                  <SkillItem icon={<Activity size={16} />} color="cyan" name={t("bio.solid")} />
                  <SkillItem icon={<Cpu size={16} />} color="teal" name={t("bio.oop")} />
                  <SkillItem icon={<Database size={16} />} color="pink" name={t("bio.linq")} />
                </div>
                
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{t("bio.architecture_leadership")}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                  <SkillItem icon={<LayoutGrid size={16} />} color="yellow" name={t("bio.system_design")} />
                  <SkillItem icon={<GitBranch size={16} />} color="indigo" name={t("bio.devops")} />
                  <SkillItem icon={<LineChart size={16} />} color="lime" name={t("bio.pmp")} />
                  <SkillItem icon={<GitBranch size={16} />} color="rose" name={t("bio.agile")} />
                  <SkillItem icon={<LayoutGrid size={16} />} color="purple" name={t("bio.microservices")} />
                  <SkillItem icon={<Server size={16} />} color="blue" name={t("bio.cloud_architecture")} />
                </div>
                
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{t("bio.project_management")}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <SkillItem icon={<LineChart size={16} />} color="amber" name={t("bio.pmp_certified")} />
                  <SkillItem icon={<GitBranch size={16} />} color="green" name={t("bio.scrum")} />
                  <SkillItem icon={<Activity size={16} />} color="rose" name={t("bio.team_leadership")} />
                  <SkillItem icon={<Cpu size={16} />} color="cyan" name={t("bio.risk_management")} />
                  <SkillItem icon={<LayoutGrid size={16} />} color="indigo" name={t("bio.resource_planning")} />
                  <SkillItem icon={<Database size={16} />} color="teal" name={t("bio.pmbok")} />
                  <SkillItem icon={<Server size={16} />} color="pink" name={t("bio.project_scheduling")} />
                  <SkillItem icon={<LineChart size={16} />} color="blue" name={t("bio.stakeholder_management")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for skills
function SkillItem({ icon, color, name }: { icon: React.ReactNode, color: string, name: string }) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    lime: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300 border-lime-200 dark:border-lime-800",
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    rose: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300 border-rose-200 dark:border-rose-800"
  };
  
  return (
    <div className={`flex items-center p-2 border rounded-lg ${colorMap[color]} transition-all hover:scale-105 shadow-sm hover:shadow`}>
      <span className="mr-2">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
}