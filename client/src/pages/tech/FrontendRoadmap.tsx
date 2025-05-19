import TechContentLayout from "@/components/blog/TechContentLayout";
import { useTranslation } from "react-i18next";

export default function FrontendRoadmap() {
  const { t } = useTranslation();
  
  return (
    <TechContentLayout 
      title={t("frontendRoadmap.title", "Frontend Roadmap (Angular & React)")} 
      description={t("frontendRoadmap.description", "Master Angular and React to build modern, responsive user interfaces.")}
    >
      <section>
        <h2>{t("frontendRoadmap.fundamentals.title", "Frontend Development Fundamentals")}</h2>
        <p>
          {t("frontendRoadmap.fundamentals.intro", "Before diving into frameworks like Angular and React, it's essential to have a solid understanding of the core web technologies that power the modern frontend ecosystem.")}
        </p>
        
        <h3>{t("frontendRoadmap.fundamentals.coreTech.title", "Core Technologies")}</h3>
        <ul>
          <li><strong>{t("frontendRoadmap.fundamentals.coreTech.html", "HTML5")}</strong> - {t("frontendRoadmap.fundamentals.coreTech.htmlDesc", "Semantic markup, accessibility, and document structure")}</li>
          <li><strong>{t("frontendRoadmap.fundamentals.coreTech.css", "CSS3")}</strong> - {t("frontendRoadmap.fundamentals.coreTech.cssDesc", "Styling, layouts, animations, and responsive design")}</li>
          <li><strong>{t("frontendRoadmap.fundamentals.coreTech.js", "JavaScript (ES6+)")}</strong> - {t("frontendRoadmap.fundamentals.coreTech.jsDesc", "Core language features, DOM manipulation, and modern syntax")}</li>
          <li><strong>{t("frontendRoadmap.fundamentals.coreTech.ts", "TypeScript")}</strong> - {t("frontendRoadmap.fundamentals.coreTech.tsDesc", "Static typing for JavaScript, essential for Angular and recommended for React")}</li>
        </ul>
        
        <div className="my-4 p-4 bg-yellow-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("frontendRoadmap.fundamentals.prerequisites.title", "Prerequisite Skills:")}</h4>
          <ul>
            <li>{t("frontendRoadmap.fundamentals.prerequisites.http", "Understanding of HTTP protocol and API concepts")}</li>
            <li>{t("frontendRoadmap.fundamentals.prerequisites.responsive", "Basic understanding of responsive design principles")}</li>
            <li>{t("frontendRoadmap.fundamentals.prerequisites.devtools", "Familiarity with browser DevTools")}</li>
            <li>{t("frontendRoadmap.fundamentals.prerequisites.git", "Version control with Git")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("frontendRoadmap.angular.title", "Angular Framework")}</h2>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.angular.concepts.title", "Core Concepts")}</h3>
          <ul>
            <li><strong>{t("frontendRoadmap.angular.concepts.components", "Components")}</strong> - {t("frontendRoadmap.angular.concepts.componentsDesc", "Building blocks of Angular applications")}</li>
            <li><strong>{t("frontendRoadmap.angular.concepts.templates", "Templates")}</strong> - {t("frontendRoadmap.angular.concepts.templatesDesc", "HTML with Angular-specific syntax")}</li>
            <li><strong>{t("frontendRoadmap.angular.concepts.directives", "Directives")}</strong> - {t("frontendRoadmap.angular.concepts.directivesDesc", "Extending HTML with custom behaviors")}</li>
            <li><strong>{t("frontendRoadmap.angular.concepts.services", "Services")}</strong> - {t("frontendRoadmap.angular.concepts.servicesDesc", "Reusable data and logic providers")}</li>
            <li><strong>{t("frontendRoadmap.angular.concepts.di", "Dependency Injection")}</strong> - {t("frontendRoadmap.angular.concepts.diDesc", "Angular's DI system")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.angular.state.title", "State Management and Data Flow")}</h3>
          <ul>
            <li>{t("frontendRoadmap.angular.state.io", "Input/Output properties")}</li>
            <li>{t("frontendRoadmap.angular.state.services", "Services and RxJS")}</li>
            <li>{t("frontendRoadmap.angular.state.ngrx", "NgRx for complex state management")}</li>
            <li>{t("frontendRoadmap.angular.state.http", "HTTP Client for API communication")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.angular.ecosystem.title", "Angular Ecosystem")}</h3>
          <ul>
            <li>{t("frontendRoadmap.angular.ecosystem.cli", "Angular CLI for project scaffolding and tooling")}</li>
            <li>{t("frontendRoadmap.angular.ecosystem.material", "Angular Material for UI components")}</li>
            <li>{t("frontendRoadmap.angular.ecosystem.universal", "Angular Universal for server-side rendering")}</li>
            <li>{t("frontendRoadmap.angular.ecosystem.nx", "Nx for monorepo management")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("frontendRoadmap.react.title", "React Library")}</h2>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.react.concepts.title", "Core Concepts")}</h3>
          <ul>
            <li><strong>{t("frontendRoadmap.react.concepts.components", "Components")}</strong> - {t("frontendRoadmap.react.concepts.componentsDesc", "Functional and class components")}</li>
            <li><strong>{t("frontendRoadmap.react.concepts.jsx", "JSX")}</strong> - {t("frontendRoadmap.react.concepts.jsxDesc", "JavaScript XML syntax")}</li>
            <li><strong>{t("frontendRoadmap.react.concepts.props", "Props")}</strong> - {t("frontendRoadmap.react.concepts.propsDesc", "Component properties")}</li>
            <li><strong>{t("frontendRoadmap.react.concepts.state", "State")}</strong> - {t("frontendRoadmap.react.concepts.stateDesc", "Component-level data")}</li>
            <li><strong>{t("frontendRoadmap.react.concepts.hooks", "Hooks")}</strong> - {t("frontendRoadmap.react.concepts.hooksDesc", "Managing state and side effects in functional components")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.react.state.title", "State Management and Data Flow")}</h3>
          <ul>
            <li>{t("frontendRoadmap.react.state.context", "Context API for component tree state")}</li>
            <li>{t("frontendRoadmap.react.state.redux", "Redux for global state management")}</li>
            <li>{t("frontendRoadmap.react.state.query", "React Query for server-state")}</li>
            <li>{t("frontendRoadmap.react.state.apollo", "Apollo Client for GraphQL")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.react.ecosystem.title", "React Ecosystem")}</h3>
          <ul>
            <li>{t("frontendRoadmap.react.ecosystem.cra", "Create React App for project setup")}</li>
            <li>{t("frontendRoadmap.react.ecosystem.nextjs", "Next.js for server-side rendering and static site generation")}</li>
            <li>{t("frontendRoadmap.react.ecosystem.ui", "Material-UI, Chakra UI, and other component libraries")}</li>
            <li>{t("frontendRoadmap.react.ecosystem.router", "React Router for navigation")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("frontendRoadmap.common.title", "Common Frontend Skills")}</h2>
        <div className="my-6">
          <h3>{t("frontendRoadmap.common.styling.title", "Styling Approaches")}</h3>
          <ul>
            <li>{t("frontendRoadmap.common.styling.modules", "CSS Modules for component-scoped styles")}</li>
            <li>{t("frontendRoadmap.common.styling.styled", "Styled Components for CSS-in-JS")}</li>
            <li>{t("frontendRoadmap.common.styling.tailwind", "Tailwind CSS for utility-first styling")}</li>
            <li>{t("frontendRoadmap.common.styling.sass", "Sass/SCSS for enhanced CSS capabilities")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.common.testing.title", "Testing Frameworks")}</h3>
          <ul>
            <li>{t("frontendRoadmap.common.testing.jest", "Jest for unit testing")}</li>
            <li>{t("frontendRoadmap.common.testing.rtl", "React Testing Library / Angular Testing Utilities")}</li>
            <li>{t("frontendRoadmap.common.testing.cypress", "Cypress for end-to-end testing")}</li>
            <li>{t("frontendRoadmap.common.testing.storybook", "Storybook for component documentation and visual testing")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("frontendRoadmap.common.performance.title", "Performance Optimization")}</h3>
          <ul>
            <li>{t("frontendRoadmap.common.performance.splitting", "Code splitting and lazy loading")}</li>
            <li>{t("frontendRoadmap.common.performance.memo", "Memoization techniques")}</li>
            <li>{t("frontendRoadmap.common.performance.vitals", "Web Vitals and Lighthouse audits")}</li>
            <li>{t("frontendRoadmap.common.performance.bundle", "Bundle size optimization")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("frontendRoadmap.learning.title", "Learning Path")}</h2>
        <p>
          {t("frontendRoadmap.learning.intro", "Follow this structured path to becoming proficient in frontend development:")}
        </p>
        <ol>
          <li><strong>{t("frontendRoadmap.learning.path.basics", "Basics:")}</strong> {t("frontendRoadmap.learning.path.basicsDesc", "Master HTML, CSS, and JavaScript fundamentals")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.typescript", "TypeScript:")}</strong> {t("frontendRoadmap.learning.path.typescriptDesc", "Learn TypeScript basics and type systems")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.framework", "Choose a Framework:")}</strong> {t("frontendRoadmap.learning.path.frameworkDesc", "Pick either Angular or React to start (based on project needs)")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.projects", "Build Projects:")}</strong> {t("frontendRoadmap.learning.path.projectsDesc", "Create progressively complex applications")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.testing", "Testing:")}</strong> {t("frontendRoadmap.learning.path.testingDesc", "Implement comprehensive testing strategies")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.state", "State Management:")}</strong> {t("frontendRoadmap.learning.path.stateDesc", "Add advanced state management")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.performance", "Performance:")}</strong> {t("frontendRoadmap.learning.path.performanceDesc", "Optimize for speed and user experience")}</li>
          <li><strong>{t("frontendRoadmap.learning.path.patterns", "Advanced Patterns:")}</strong> {t("frontendRoadmap.learning.path.patternsDesc", "Learn design patterns specific to your framework")}</li>
        </ol>
        
        <div className="mt-6 p-4 bg-red-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("frontendRoadmap.comparison.title", "Framework Comparison:")}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <h5 className="font-bold">{t("frontendRoadmap.comparison.angular.title", "Angular")}</h5>
              <ul className="mt-2">
                <li>{t("frontendRoadmap.comparison.angular.complete", "Complete framework with built-in solutions")}</li>
                <li>{t("frontendRoadmap.comparison.angular.typescript", "TypeScript required")}</li>
                <li>{t("frontendRoadmap.comparison.angular.opinions", "Stronger opinions about architecture")}</li>
                <li>{t("frontendRoadmap.comparison.angular.enterprise", "Ideal for enterprise applications")}</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">{t("frontendRoadmap.comparison.react.title", "React")}</h5>
              <ul className="mt-2">
                <li>{t("frontendRoadmap.comparison.react.flexible", "Flexible library approach")}</li>
                <li>{t("frontendRoadmap.comparison.react.ecosystem", "More ecosystem choices")}</li>
                <li>{t("frontendRoadmap.comparison.react.learning", "Lighter learning curve initially")}</li>
                <li>{t("frontendRoadmap.comparison.react.startups", "Great for startups and quick prototyping")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TechContentLayout>
  );
}