import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/not-found";

// Tech blog pages
import DotNetRoadmap from "@/pages/tech/DotNetRoadmap";
import DevOpsEssentials from "@/pages/tech/DevOpsEssentials";
import FrontendRoadmap from "@/pages/tech/FrontendRoadmap";
import ProjectManagement from "@/pages/tech/ProjectManagement";
import AIForDevelopers from "@/pages/tech/AIForDevelopers";
import DatabaseArchitecture from "@/pages/tech/DatabaseArchitecture";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      
      {/* Tech blog routes */}
      <Route path="/tech/dotnet-roadmap" component={DotNetRoadmap}/>
      <Route path="/tech/devops-essentials" component={DevOpsEssentials}/>
      <Route path="/tech/frontend-roadmap" component={FrontendRoadmap}/>
      <Route path="/tech/project-management" component={ProjectManagement}/>
      <Route path="/tech/ai-for-developers" component={AIForDevelopers}/>
      <Route path="/tech/database-architecture" component={DatabaseArchitecture}/>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { language, direction } = useLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div dir={direction} lang={language} className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Router />
          </div>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
