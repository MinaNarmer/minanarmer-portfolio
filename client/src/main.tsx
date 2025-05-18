import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense } from "react";

// Create a simple loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-900">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-3 text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </I18nextProvider>
  </Suspense>
);
