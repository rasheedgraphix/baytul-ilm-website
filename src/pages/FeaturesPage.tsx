import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { IslamicToolsHub } from '../components/islamic/IslamicToolsHub';
import { DownloadButton } from '../components/common/DownloadButton';
import { IslamicPatternBg } from '../components/layout/IslamicPatternBg';
import { APP_CONFIG } from '../config/appConfig';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-16 overflow-hidden">
        <IslamicPatternBg variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <SectionHeader
            badge={`Application Features • v${APP_CONFIG.version}`}
            title="Explore All Baytul Ilm AI Features"
            arabicTitle="جَمِيعُ مُمَيَّزَاتِ التَّطْبِيقِ"
            subtitle="Discover the comprehensive feature set designed for students, teachers, and seekers of Islamic knowledge."
          />
        </div>
      </section>

      {/* Islamic Tools Interactive Showcase */}
      <IslamicToolsHub />

      {/* Feature Grid Component */}
      <FeatureGrid />

      {/* Download Callout */}
      <section className="max-w-4xl mx-auto px-4 text-center py-12">
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold">Experience All Features on Android (v{APP_CONFIG.version})</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Download the official Baytul Ilm AI APK to enjoy offline study tools, bookmarks, dark mode, and interactive quizzes.
          </p>
          <div className="pt-2 flex justify-center">
            <DownloadButton variant="hero" size="md" showDetails />
          </div>
        </div>
      </section>
    </div>
  );
};

