import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import profileImage from "@/assets/profile.jpg";

export default function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-color dark:text-light-color">
            {t("about.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("about.sectionSubtitle")}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-dark-color dark:text-light-color">
                {t("about.shortBio.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("about.shortBio.description")}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-primary-color mr-2">🎓</span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("about.education1.degree")} - {t("about.education1.institution")}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-color mr-2">💼</span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("about.experience")}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-color mr-2">🌍</span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("about.location")}
                  </span>
                </div>
              </div>
              
              <Link href="/about" className="inline-block bg-primary-color hover:bg-primary-color-dark text-white font-medium py-3 px-6 rounded-md transition-colors">
                {t("about.readMore")}
              </Link>
            </div>
            
            <div className="relative h-64 md:h-auto">
              <img 
                src={profileImage} 
                alt="Mina Narmer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-color/70 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}