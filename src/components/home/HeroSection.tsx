import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Sparkles, ShieldCheck, Smartphone, BookOpen, CheckCircle, Moon, HeartHandshake, Compass, Repeat, Video } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';
import { DownloadButton } from '../common/DownloadButton';
import { PhoneMockupFrame } from '../common/PhoneMockupFrame';
import { IslamicPatternBg } from '../layout/IslamicPatternBg';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-white">
      {/* Subtle Islamic Geometric Lattice Pattern */}
      <IslamicPatternBg variant="hero" />

      {/* Radiant Glow Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Version 1.3.6 Prominent Top Banner Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-4 rounded-full text-xs font-semibold bg-emerald-900/90 text-emerald-100 border border-emerald-500/50 shadow-lg shadow-emerald-950/50">
              <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-slate-950" />
                {t('latestVersionBadge')}
              </span>
              <span className="text-amber-300 font-serif font-arabic text-sm">بَيْتُ الْعِلْمِ AI</span>
              <span className="hidden sm:inline text-emerald-400 font-mono text-[11px]">com.baytulilmai.app</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-white">
              {language === 'ur' ? (
                <>
                  {t('appName')}{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                    جامع اسلامی تعلیمی پلیٹ فارم
                  </span>
                </>
              ) : language === 'ps' ? (
                <>
                  {t('appName')}{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                    جامع اسلامي تعلیمي پلیټفارم
                  </span>
                </>
              ) : (
                <>
                  {t('appName')}{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                    Android Platform
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 font-urdu" dir={isRtl ? 'rtl' : 'ltr'}>
              {t('heroSubtitle')}
            </p>

            {/* Islamic 8 Features Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center space-y-1">
                <BookOpen className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="text-[11px] font-bold text-slate-200 block font-urdu">{t('featureQuranTitle')}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center space-y-1">
                <HeartHandshake className="w-4 h-4 text-emerald-400 mx-auto" />
                <span className="text-[11px] font-bold text-slate-200 block font-urdu">{t('featureDuasTitle')}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center space-y-1">
                <Moon className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="text-[11px] font-bold text-slate-200 block font-urdu">{t('featureAsmaulHusnaTitle')}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center space-y-1">
                <Repeat className="w-4 h-4 text-emerald-400 mx-auto" />
                <span className="text-[11px] font-bold text-slate-200 block font-urdu">{t('featureTasbeehTitle')}</span>
              </div>
            </div>

            {/* Action Buttons: Prominent [ Download Latest APK ] */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <DownloadButton variant="hero" size="lg" showDetails />

              <a
                href="#islamic-tools"
                className="px-6 py-4 text-base font-semibold rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{t('tryIslamicTools')}</span>
              </a>
            </div>

            {/* Metadata Footer Badge */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-4 font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> {t('latestVersionBadge')}
              </span>
              <span>•</span>
              <span className="text-slate-400">Android 7.0+ (Nougat)</span>
              <span>•</span>
              <span className="text-amber-400">{t('approxSize')}</span>
            </div>
          </div>

          {/* Right Smartphone Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              
              <PhoneMockupFrame initialTab="home" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

