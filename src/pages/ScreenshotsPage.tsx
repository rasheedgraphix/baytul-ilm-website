import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ScreenshotsGallery } from '../components/gallery/ScreenshotsGallery';
import { IslamicPatternBg } from '../components/layout/IslamicPatternBg';

export const ScreenshotsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-16 overflow-hidden">
        <IslamicPatternBg variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <SectionHeader
            badge="Mobile Visuals"
            title="Android App UI Screenshots"
            arabicTitle="مَعْرِضُ شَاشَاتِ التَّطْبِيقِ الأَكاديمِي"
            subtitle="Preview the distraction-free dark emerald user experience crafted for Android devices."
          />
        </div>
      </section>

      {/* Screenshots Gallery Component */}
      <ScreenshotsGallery />
    </div>
  );
};
