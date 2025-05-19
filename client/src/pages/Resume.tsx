import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Download, 
  Code, 
  Database, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Users, 
  Heart,
  Lightbulb,
  Layers,
  Image,
  Camera,
  ChevronLeft,
  ChevronRight,
  ImageIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import egyptianCodeBg from "@/assets/egyptian-code-bg.png";
import profileTertiary from "@/assets/profile-tertiary.png";
import resumeSon from "@/assets/resume-son.png";
import resumeEinstein from "@/assets/resume-einstein.png";
import resumeItaly from "@/assets/resume-italy.png";
import resumeMountains1 from "@/assets/resume-mountains1.png";
import resumeMountains2 from "@/assets/resume-mountains2.png";
import resumeFamily from "@/assets/resume-family.png";
import resumePDF from "@/assets/Mina-Youssef-CV.pdf";

export default function Resume() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [isAnimating, setIsAnimating] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  
  // Gallery photos array
  const galleryPhotos = [
    { src: resumeSon, location: "Sky App Developers, Egypt", caption: "With my son at the office" },
    { src: resumeEinstein, location: "Bern, Switzerland", caption: "With Einstein statue" },
    { src: resumeItaly, location: "Varenna, Italy", caption: "Beautiful Italian village" },
    { src: resumeMountains1, location: "Interlaken, Switzerland", caption: "Swiss Alps" },
    { src: resumeMountains2, location: "Interlaken, Switzerland", caption: "Mountain view" },
    { src: resumeFamily, location: "Cairo, Egypt", caption: "Family time" }
  ];
  
  // Navigation functions for photo gallery
  const nextPhoto = () => {
    setActivePhotoIndex((current) => (current === galleryPhotos.length - 1 ? 0 : current + 1));
  };
  
  const prevPhoto = () => {
    setActivePhotoIndex((current) => (current === 0 ? galleryPhotos.length - 1 : current - 1));
  };
  
  // Links to CV files for different languages
  const cvFiles = {
    en: "/assets/Mina-Youssef-CV.pdf",
    de: "/assets/Mina-Youssef-CV.pdf",
    it: "/assets/Mina-Youssef-CV.pdf"
  };
  
  // Helper function to get the correct CV link based on current language
  const getCvLink = () => {
    return cvFiles[language as keyof typeof cvFiles] || cvFiles.en;
  };

  // Handle section change with animation
  const changeSection = (section: string) => {
    if (section === activeSection) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsAnimating(false);
    }, 300);
  };
  
  // Navigation items
  const navItems = [
    { id: "profile", label: t('resume.profile.title'), icon: <Users size={20} /> },
    { id: "experience", label: t('resume.experience.title'), icon: <Briefcase size={20} /> },
    { id: "skills", label: t('resume.skills.title'), icon: <Code size={20} /> },
    { id: "education", label: t('resume.education.title'), icon: <GraduationCap size={20} /> },
    { id: "certifications", label: t('resume.certifications.title'), icon: <Award size={20} /> },
    { id: "gallery", label: "Photo Gallery", icon: <Camera size={20} /> },
    { id: "freelance", label: t('resume.freelance.title'), icon: <Layers size={20} /> },
    { id: "languages", label: t('resume.languages.title'), icon: <Globe size={20} /> },
    { id: "interests", label: t('resume.interests.title'), icon: <Heart size={20} /> }
  ];
  
  // Render the active section content
  const renderSection = () => {
    switch(activeSection) {
      case "profile":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Users className="mr-3 text-primary-color" size={28} />
              {t('resume.profile.title')}
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t('resume.profile.description')}
              </p>
            </div>
          </div>
        );
        
      case "experience":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary-color" size={28} />
              {t('resume.experience.title')}
            </h2>
            
            <div className="space-y-8">
              {/* Timeline */}
              <div className="relative">
                {/* Job 1 */}
                <div className="mb-12 ml-6">
                  <div className="absolute w-4 h-4 bg-primary-color rounded-full -left-2 mt-1.5"></div>
                  <div className="absolute w-0.5 h-full bg-gray-300 dark:bg-gray-700 -left-0.5 z-[-1]"></div>
                  
                  <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-primary-color transition-all hover:shadow-xl hover:translate-x-1">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('resume.experience.job1.title')}
                      </h3>
                      <span className="text-primary-color font-medium bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {t('resume.experience.job1.period')}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      @{t('resume.experience.job1.company')}
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job1.responsibility1')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job1.responsibility2')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job1.responsibility3')}
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Job 2 */}
                <div className="mb-12 ml-6">
                  <div className="absolute w-4 h-4 bg-primary-color rounded-full -left-2 mt-1.5"></div>
                  
                  <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-primary-color transition-all hover:shadow-xl hover:translate-x-1">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('resume.experience.job2.title')}
                      </h3>
                      <span className="text-primary-color font-medium bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {t('resume.experience.job2.period')}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      @{t('resume.experience.job2.company')}
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job2.responsibility1')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job2.responsibility2')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job2.responsibility3')}
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Job 3 */}
                <div className="ml-6">
                  <div className="absolute w-4 h-4 bg-primary-color rounded-full -left-2 mt-1.5"></div>
                  
                  <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-primary-color transition-all hover:shadow-xl hover:translate-x-1">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('resume.experience.job3.title')}
                      </h3>
                      <span className="text-primary-color font-medium bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {t('resume.experience.job3.period')}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      @{t('resume.experience.job3.company')}
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job3.responsibility1')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job3.responsibility2')}
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-color">▹</span>
                        {t('resume.experience.job3.responsibility3')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "skills":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-3 text-primary-color" size={28} />
              {t('resume.skills.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Skills Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Cpu className="mr-2 text-primary-color" size={20} />
                  {t('resume.skills.technical.title')}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {['C#', '.NET Core', 'ASP.NET', 'SQL', 'DevOps', 'LINQ', 'OOP',
                    'SOLID', 'Design Patterns', 'APIs', 'System Design', 'AI'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('resume.skills.methodology')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Agile', 'PMP', 'System Architecture'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="mr-2 text-primary-color" size={20} />
                  {t('resume.skills.soft.title')}
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-primary-color rounded-full mr-3"></span>
                    {t('resume.skills.soft.skill1')}
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-primary-color rounded-full mr-3"></span>
                    {t('resume.skills.soft.skill2')}
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-primary-color rounded-full mr-3"></span>
                    {t('resume.skills.soft.skill3')}
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-primary-color rounded-full mr-3"></span>
                    {t('resume.skills.soft.skill4')}
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-primary-color rounded-full mr-3"></span>
                    {t('resume.skills.soft.skill5')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
        
      case "education":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary-color" size={28} />
              {t('resume.education.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-color mr-4">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('resume.education.degree1.name')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t('resume.education.degree1.institution')}
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {t('resume.education.degree1.period')}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3 border-t pt-3 border-gray-200 dark:border-gray-700">
                  {t('resume.education.degree1.description')}
                </p>
              </div>
              
              {/* Educational Travel Photos */}
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={profileTertiary} 
                      alt="Educational travel in Italy" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-lg font-bold">Studying Abroad</h3>
                      <p className="text-sm text-gray-200">International educational experience</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Italy
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Expanded educational horizons through travel and cultural immersion, learning about architecture, history, and international systems design approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "languages":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Globe className="mr-3 text-primary-color" size={28} />
              {t('resume.languages.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">🇺🇸</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t('resume.languages.english.name')}
                  </h3>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-color h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('resume.languages.english.level')}
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">🇪🇬</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t('resume.languages.arabic.name')}
                  </h3>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-color h-2.5 rounded-full w-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('resume.languages.arabic.level')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "certifications":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-3 text-primary-color" size={28} />
              {t('resume.certifications.title')}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-color mr-4 mb-4 md:mb-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('resume.certifications.cert1.name')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('resume.certifications.cert1.issuer')} • {t('resume.certifications.cert1.year')}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Active
                  </span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-color mr-4 mb-4 md:mb-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('resume.certifications.cert2.name')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('resume.certifications.cert2.issuer')} • {t('resume.certifications.cert2.year')}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "gallery":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Camera className="mr-3 text-primary-color" size={28} />
              Photo Gallery
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="relative">
                {/* Main image display */}
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <img 
                    src={galleryPhotos[activePhotoIndex].src} 
                    alt={galleryPhotos[activePhotoIndex].caption}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105" 
                  />
                  
                  {/* Overlay with location and caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                      <h3 className="text-xl font-semibold">{galleryPhotos[activePhotoIndex].caption}</h3>
                      <p className="text-sm text-gray-200">{galleryPhotos[activePhotoIndex].location}</p>
                    </div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Location badge */}
                  <div className="absolute top-3 right-3 bg-primary-color text-white px-3 py-1 rounded-full text-sm font-medium">
                    {galleryPhotos[activePhotoIndex].location}
                  </div>
                </div>
                
                {/* Thumbnails */}
                <div className="grid grid-cols-6 gap-2 mt-4">
                  {galleryPhotos.map((photo, index) => (
                    <button 
                      key={index} 
                      onClick={() => setActivePhotoIndex(index)}
                      className={`relative overflow-hidden rounded-md aspect-square ${
                        activePhotoIndex === index ? 'ring-2 ring-primary-color ring-offset-2' : 'opacity-70 hover:opacity-100'
                      } transition-all`}
                    >
                      <img 
                        src={photo.src} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Caption and location */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {galleryPhotos[activePhotoIndex].caption}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {galleryPhotos[activePhotoIndex].location}
                </p>
              </div>
            </div>
          </div>
        );
      
      case "freelance":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Layers className="mr-3 text-primary-color" size={28} />
              {t('resume.freelance.title')}
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('resume.freelance.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['KAFD.sa', 'ADNOC / UAE', 'Microwize / USA', 'IbnSina Pharma / Egypt', 
                  'Bip Soft / Egypt', 'cura.healthcare KSA', 'S3edy Dev / Egypt', 'Cura.sa'].map((company, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow text-center"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case "interests":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="mr-3 text-primary-color" size={28} />
              {t('resume.interests.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Code className="text-primary-color" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Coding</h3>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-primary-color" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-color" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Reading</h3>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Cpu className="text-primary-color" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technology</h3>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{t('resume.pageTitle')} | Mina Youssef</title>
        <meta name="description" content={t('resume.pageDescription')} />
      </Helmet>
      
      {/* Resume Header with Egyptian-themed background */}
      <div 
        className="py-16 lg:py-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${egyptianCodeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('resume.title')}</h1>
          <p className="text-lg md:text-xl text-blue-300 mb-8 max-w-3xl mx-auto">{t('resume.profile.description').split('.')[0]}.</p>
          
          <button
            onClick={() => {
              // المسار المباشر إلى ملف PDF
              const pdfUrl = '/assets/Mina-Youssef-CV.pdf';
              
              // إنشاء رابط وتنزيل الملف
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.setAttribute('download', 'Mina-Youssef-CV.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center gap-2 bg-primary-color hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download size={20} />
            {t('resume.downloadButton')}
          </button>
        </div>
      </div>
      
      {/* Main Resume Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sticky top-24 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                {t('resume.title')}
              </h2>
              
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => changeSection(item.id)}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-primary-color font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                    
                    {activeSection === item.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-color"></span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}