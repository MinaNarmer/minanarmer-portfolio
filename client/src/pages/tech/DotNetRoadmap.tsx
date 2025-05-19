import TechContentLayout from "@/components/blog/TechContentLayout";
import { useTranslation } from "react-i18next";

export default function DotNetRoadmap() {
  const { t } = useTranslation();
  
  return (
    <TechContentLayout 
      title={t("dotnetRoadmap.title", ".NET Roadmap")} 
      description={t("dotnetRoadmap.description", "A comprehensive guide to mastering .NET development and building scalable applications.")}
    >
      <section>
        <h2>{t("dotnetRoadmap.gettingStarted.title", "Getting Started with .NET")}</h2>
        <p>
          {t("dotnetRoadmap.gettingStarted.intro", ".NET is a free, cross-platform, open-source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.")}
        </p>
        
        <h3>{t("dotnetRoadmap.coreConcepts.title", "Core Concepts")}</h3>
        <ul>
          <li><strong>{t("dotnetRoadmap.coreConcepts.csharp", "C# Fundamentals")}</strong> - {t("dotnetRoadmap.coreConcepts.csharpDesc", "Master the syntax, types, and object-oriented principles")}</li>
          <li><strong>{t("dotnetRoadmap.coreConcepts.clr", "CLR & .NET Runtime")}</strong> - {t("dotnetRoadmap.coreConcepts.clrDesc", "Understand how .NET executes your code")}</li>
          <li><strong>{t("dotnetRoadmap.coreConcepts.ide", "Visual Studio / VS Code")}</strong> - {t("dotnetRoadmap.coreConcepts.ideDesc", "Set up your development environment")}</li>
          <li><strong>{t("dotnetRoadmap.coreConcepts.nuget", "NuGet Package Management")}</strong> - {t("dotnetRoadmap.coreConcepts.nugetDesc", "Learn to use the .NET package ecosystem")}</li>
        </ul>
      </section>
      
      <section className="mt-10">
        <h2>{t("dotnetRoadmap.keyTech.title", "Key Technologies")}</h2>
        
        <div className="my-6">
          <h3>{t("dotnetRoadmap.keyTech.aspnet.title", "ASP.NET Core")}</h3>
          <p>{t("dotnetRoadmap.keyTech.aspnet.description", "Build web apps and services that are fast, secure, and can run on Windows, Linux and macOS:")}</p>
          <ul>
            <li>{t("dotnetRoadmap.keyTech.aspnet.mvc", "MVC Architecture")}</li>
            <li>{t("dotnetRoadmap.keyTech.aspnet.razor", "Razor Pages")}</li>
            <li>{t("dotnetRoadmap.keyTech.aspnet.blazor", "Blazor (WebAssembly & Server)")}</li>
            <li>{t("dotnetRoadmap.keyTech.aspnet.api", "Web APIs and RESTful Services")}</li>
            <li>{t("dotnetRoadmap.keyTech.aspnet.signalr", "SignalR for Real-time Applications")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("dotnetRoadmap.keyTech.ef.title", "Entity Framework Core")}</h3>
          <p>{t("dotnetRoadmap.keyTech.ef.description", "Modern ORM for .NET that supports multiple database providers:")}</p>
          <ul>
            <li>{t("dotnetRoadmap.keyTech.ef.approaches", "Code-First and Database-First Approaches")}</li>
            <li>{t("dotnetRoadmap.keyTech.ef.linq", "LINQ for Entity Queries")}</li>
            <li>{t("dotnetRoadmap.keyTech.ef.migrations", "Migrations and Schema Management")}</li>
            <li>{t("dotnetRoadmap.keyTech.ef.performance", "Performance Optimization")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("dotnetRoadmap.keyTech.desktop.title", "Desktop Development")}</h3>
          <p>{t("dotnetRoadmap.keyTech.desktop.description", "Options for building desktop applications:")}</p>
          <ul>
            <li>{t("dotnetRoadmap.keyTech.desktop.wpf", "WPF (Windows Presentation Foundation)")}</li>
            <li>{t("dotnetRoadmap.keyTech.desktop.winforms", "Windows Forms")}</li>
            <li>{t("dotnetRoadmap.keyTech.desktop.uwp", "UWP (Universal Windows Platform)")}</li>
            <li>{t("dotnetRoadmap.keyTech.desktop.maui", "MAUI (Multi-platform App UI)")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("dotnetRoadmap.advanced.title", "Advanced Topics")}</h2>
        <div className="my-6">
          <h3>{t("dotnetRoadmap.advanced.cloud.title", "Cloud and Microservices")}</h3>
          <ul>
            <li>{t("dotnetRoadmap.advanced.cloud.azure", "Azure Integration")}</li>
            <li>{t("dotnetRoadmap.advanced.cloud.docker", "Containerization with Docker")}</li>
            <li>{t("dotnetRoadmap.advanced.cloud.kubernetes", "Orchestration with Kubernetes")}</li>
            <li>{t("dotnetRoadmap.advanced.cloud.microservices", "Microservices Architecture")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("dotnetRoadmap.advanced.performance.title", "Performance and Optimization")}</h3>
          <ul>
            <li>{t("dotnetRoadmap.advanced.performance.async", "Async/Await Patterns")}</li>
            <li>{t("dotnetRoadmap.advanced.performance.memory", "Memory Management")}</li>
            <li>{t("dotnetRoadmap.advanced.performance.threading", "Threading and Concurrency")}</li>
            <li>{t("dotnetRoadmap.advanced.performance.profiling", "Performance Profiling")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("dotnetRoadmap.advanced.testing.title", "Testing")}</h3>
          <ul>
            <li>{t("dotnetRoadmap.advanced.testing.unit", "Unit Testing with xUnit, NUnit, or MSTest")}</li>
            <li>{t("dotnetRoadmap.advanced.testing.integration", "Integration Testing")}</li>
            <li>{t("dotnetRoadmap.advanced.testing.mock", "Mock Objects and Dependency Injection")}</li>
            <li>{t("dotnetRoadmap.advanced.testing.tdd", "Test-Driven Development (TDD)")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("dotnetRoadmap.learning.title", "Learning Path and Resources")}</h2>
        <p>
          {t("dotnetRoadmap.learning.intro", "Follow this structured path to becoming proficient in .NET development:")}
        </p>
        <ol>
          <li><strong>{t("dotnetRoadmap.learning.path.basics", "Basics:")}</strong> {t("dotnetRoadmap.learning.path.basicsDesc", "Learn C# and .NET fundamentals")}</li>
          <li><strong>{t("dotnetRoadmap.learning.path.web", "Web Development:")}</strong> {t("dotnetRoadmap.learning.path.webDesc", "Master ASP.NET Core")}</li>
          <li><strong>{t("dotnetRoadmap.learning.path.data", "Data Access:")}</strong> {t("dotnetRoadmap.learning.path.dataDesc", "Learn Entity Framework Core")}</li>
          <li><strong>{t("dotnetRoadmap.learning.path.auth", "Authentication:")}</strong> {t("dotnetRoadmap.learning.path.authDesc", "Implement identity and security")}</li>
          <li><strong>{t("dotnetRoadmap.learning.path.cloud", "Cloud:")}</strong> {t("dotnetRoadmap.learning.path.cloudDesc", "Deploy to Azure and implement DevOps")}</li>
          <li><strong>{t("dotnetRoadmap.learning.path.advanced", "Advanced:")}</strong> {t("dotnetRoadmap.learning.path.advancedDesc", "Explore microservices and serverless")}</li>
        </ol>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("dotnetRoadmap.learning.certifications.title", "Recommended Certifications:")}</h4>
          <ul>
            <li>{t("dotnetRoadmap.learning.certifications.azure", "Microsoft Certified: Azure Developer Associate")}</li>
            <li>{t("dotnetRoadmap.learning.certifications.dotnet", "Microsoft Certified: .NET Developer")}</li>
          </ul>
        </div>
      </section>
    </TechContentLayout>
  );
}