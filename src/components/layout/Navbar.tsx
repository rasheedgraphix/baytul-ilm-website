import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Download, Sparkles, Moon } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';
import { DownloadButton } from '../common/DownloadButton';
import { BrandLogo } from '../common/BrandLogo';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navFeatures'), path: '/features' },
    { name: t('navScreenshots'), path: '/screenshots' },
    { name: t('navDownload'), path: '/download' },
    { name: t('navPrivacy'), path: '/privacy-policy' },
    { name: t('navContact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <BrandLogo size="md" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {APP_CONFIG.appName}
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wider mt-0.5">
              v{APP_CONFIG.version} Official App
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  isActive
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-slate-100/80 dark:hover:bg-slate-900/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Language Switcher + Download APK Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher />
          <DownloadButton variant="primary" size="sm" />
        </div>

        {/* Mobile Hamburger Button + Language Switcher */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher className="scale-90" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-800 text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.path === '/download' && <Download className="w-3.5 h-3.5 text-amber-300" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-2">
            <DownloadButton variant="hero" size="md" showDetails />
          </div>
        </div>
      )}
    </header>
  );
};

