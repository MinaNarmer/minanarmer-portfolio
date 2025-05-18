import TechContentLayout from "@/components/blog/TechContentLayout";

export default function FrontendRoadmap() {
  return (
    <TechContentLayout 
      title="Frontend Roadmap (Angular & React)" 
      description="Master Angular and React to build modern, responsive user interfaces."
    >
      <section>
        <h2>Frontend Development Fundamentals</h2>
        <p>
          Before diving into frameworks like Angular and React, it's essential to have a solid
          understanding of the core web technologies that power the modern frontend ecosystem.
        </p>
        
        <h3>Core Technologies</h3>
        <ul>
          <li><strong>HTML5</strong> - Semantic markup, accessibility, and document structure</li>
          <li><strong>CSS3</strong> - Styling, layouts, animations, and responsive design</li>
          <li><strong>JavaScript (ES6+)</strong> - Core language features, DOM manipulation, and modern syntax</li>
          <li><strong>TypeScript</strong> - Static typing for JavaScript, essential for Angular and recommended for React</li>
        </ul>
        
        <div className="my-4 p-4 bg-yellow-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">Prerequisite Skills:</h4>
          <ul>
            <li>Understanding of HTTP protocol and API concepts</li>
            <li>Basic understanding of responsive design principles</li>
            <li>Familiarity with browser DevTools</li>
            <li>Version control with Git</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>Angular Framework</h2>
        
        <div className="my-6">
          <h3>Core Concepts</h3>
          <ul>
            <li><strong>Components</strong> - Building blocks of Angular applications</li>
            <li><strong>Templates</strong> - HTML with Angular-specific syntax</li>
            <li><strong>Directives</strong> - Extending HTML with custom behaviors</li>
            <li><strong>Services</strong> - Reusable data and logic providers</li>
            <li><strong>Dependency Injection</strong> - Angular's DI system</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>State Management and Data Flow</h3>
          <ul>
            <li>Input/Output properties</li>
            <li>Services and RxJS</li>
            <li>NgRx for complex state management</li>
            <li>HTTP Client for API communication</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>Angular Ecosystem</h3>
          <ul>
            <li>Angular CLI for project scaffolding and tooling</li>
            <li>Angular Material for UI components</li>
            <li>Angular Universal for server-side rendering</li>
            <li>Nx for monorepo management</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>React Library</h2>
        
        <div className="my-6">
          <h3>Core Concepts</h3>
          <ul>
            <li><strong>Components</strong> - Functional and class components</li>
            <li><strong>JSX</strong> - JavaScript XML syntax</li>
            <li><strong>Props</strong> - Component properties</li>
            <li><strong>State</strong> - Component-level data</li>
            <li><strong>Hooks</strong> - Managing state and side effects in functional components</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>State Management and Data Flow</h3>
          <ul>
            <li>Context API for component tree state</li>
            <li>Redux for global state management</li>
            <li>React Query for server-state</li>
            <li>Apollo Client for GraphQL</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>React Ecosystem</h3>
          <ul>
            <li>Create React App for project setup</li>
            <li>Next.js for server-side rendering and static site generation</li>
            <li>Material-UI, Chakra UI, and other component libraries</li>
            <li>React Router for navigation</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>Common Frontend Skills</h2>
        <div className="my-6">
          <h3>Styling Approaches</h3>
          <ul>
            <li>CSS Modules for component-scoped styles</li>
            <li>Styled Components for CSS-in-JS</li>
            <li>Tailwind CSS for utility-first styling</li>
            <li>Sass/SCSS for enhanced CSS capabilities</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>Testing Frameworks</h3>
          <ul>
            <li>Jest for unit testing</li>
            <li>React Testing Library / Angular Testing Utilities</li>
            <li>Cypress for end-to-end testing</li>
            <li>Storybook for component documentation and visual testing</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>Performance Optimization</h3>
          <ul>
            <li>Code splitting and lazy loading</li>
            <li>Memoization techniques</li>
            <li>Web Vitals and Lighthouse audits</li>
            <li>Bundle size optimization</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>Learning Path</h2>
        <p>
          Follow this structured path to becoming proficient in frontend development:
        </p>
        <ol>
          <li><strong>Basics:</strong> Master HTML, CSS, and JavaScript fundamentals</li>
          <li><strong>TypeScript:</strong> Learn TypeScript basics and type systems</li>
          <li><strong>Choose a Framework:</strong> Pick either Angular or React to start (based on project needs)</li>
          <li><strong>Build Projects:</strong> Create progressively complex applications</li>
          <li><strong>Testing:</strong> Implement comprehensive testing strategies</li>
          <li><strong>State Management:</strong> Add advanced state management</li>
          <li><strong>Performance:</strong> Optimize for speed and user experience</li>
          <li><strong>Advanced Patterns:</strong> Learn design patterns specific to your framework</li>
        </ol>
        
        <div className="mt-6 p-4 bg-red-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">Framework Comparison:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <h5 className="font-bold">Angular</h5>
              <ul className="mt-2">
                <li>Complete framework with built-in solutions</li>
                <li>TypeScript required</li>
                <li>Stronger opinions about architecture</li>
                <li>Ideal for enterprise applications</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">React</h5>
              <ul className="mt-2">
                <li>Flexible library approach</li>
                <li>More ecosystem choices</li>
                <li>Lighter learning curve initially</li>
                <li>Great for startups and quick prototyping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TechContentLayout>
  );
}