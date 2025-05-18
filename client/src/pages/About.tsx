import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import profileImage from "@/assets/profile.jpg";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("about.pageTitle")} | {t("seo.home.title")}</title>
        <meta name="description" content={t("about.pageDescription")} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-color dark:text-light-color mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img 
                  src={profileImage} 
                  alt="Mina Narmer"
                  className="w-full max-w-xs mx-auto rounded-xl shadow-lg mb-6" 
                />
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <h3 className="font-display font-bold text-xl mb-4 text-dark-color dark:text-light-color">
                    {t("about.contactInfo")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-color mr-2">📧</span>
                      <span>mina.narmer@example.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-color mr-2">🌍</span>
                      <span>San Francisco, CA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-color mr-2">💼</span>
                      <span>Senior Software Engineer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-color dark:text-light-color mb-6 flex items-center">
                  <span className="text-primary-color mr-3">👨‍💻</span>
                  {t("about.professionalTitle")}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    {t("about.professionalDescription1")}
                  </p>
                  <p>
                    {t("about.professionalDescription2")}
                  </p>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-color dark:text-light-color mb-6 flex items-center">
                  <span className="text-primary-color mr-3">🧠</span>
                  {t("about.skillsTitle")}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <h3 className="font-display font-bold text-xl mb-4 text-dark-color dark:text-light-color">
                      {t("about.technicalSkills")}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-color rounded-full mr-2"></span>
                        <span>C#, .NET Core, ASP.NET</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-color rounded-full mr-2"></span>
                        <span>Python, TensorFlow, PyTorch</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-color rounded-full mr-2"></span>
                        <span>JavaScript, TypeScript, React</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-color rounded-full mr-2"></span>
                        <span>SQL Server, MongoDB, Redis</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-primary-color rounded-full mr-2"></span>
                        <span>Azure, AWS, Docker, Kubernetes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <h3 className="font-display font-bold text-xl mb-4 text-dark-color dark:text-light-color">
                      {t("about.softSkills")}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-secondary-color rounded-full mr-2"></span>
                        <span>{t("about.softSkill1")}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-secondary-color rounded-full mr-2"></span>
                        <span>{t("about.softSkill2")}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-secondary-color rounded-full mr-2"></span>
                        <span>{t("about.softSkill3")}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-secondary-color rounded-full mr-2"></span>
                        <span>{t("about.softSkill4")}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-secondary-color rounded-full mr-2"></span>
                        <span>{t("about.softSkill5")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-color dark:text-light-color mb-6 flex items-center">
                  <span className="text-primary-color mr-3">📚</span>
                  {t("about.educationTitle")}
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-bold text-xl text-dark-color dark:text-light-color">
                        {t("about.education1.degree")}
                      </h3>
                      <span className="text-sm bg-primary-color text-white px-2 py-1 rounded">
                        {t("about.education1.years")}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {t("about.education1.institution")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.education1.description")}
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-bold text-xl text-dark-color dark:text-light-color">
                        {t("about.education2.degree")}
                      </h3>
                      <span className="text-sm bg-primary-color text-white px-2 py-1 rounded">
                        {t("about.education2.years")}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {t("about.education2.institution")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.education2.description")}
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="photo-gallery">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-color dark:text-light-color mb-6 flex items-center">
                  <span className="text-primary-color mr-3">📸</span>
                  {t("about.galleryTitle")}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Placeholder for gallery images - will be replaced with actual images */}
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      {t("about.galleryImagePlaceholder")}
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      {t("about.galleryImagePlaceholder")}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}