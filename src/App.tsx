import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ScreenshotsPage } from './pages/ScreenshotsPage';
import { DownloadPage } from './pages/DownloadPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
          {/* Responsive Fixed Navigation Header */}
          <Navbar />

          {/* Dynamic Page Router Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/screenshots" element={<ScreenshotsPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Legacy route redirects to keep links valid */}
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/dars-e-nizami" element={<Navigate to="/features" replace />} />
              <Route path="/quiz-system" element={<Navigate to="/features" replace />} />
              <Route path="/ai-assistant" element={<Navigate to="/features" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

