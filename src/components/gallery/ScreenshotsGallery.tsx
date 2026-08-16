import React, { useState } from 'react';
import { APP_SCREENSHOTS } from '../../config/screenshotsData';
import { SectionHeader } from '../common/SectionHeader';
import { Maximize2, Smartphone, CheckCircle } from 'lucide-react';

export const ScreenshotsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = ['All', 'Home', 'Dars-e-Nizami', 'Quiz', 'AI Tutor', 'Library', 'Profile'];

  const filteredScreenshots = APP_SCREENSHOTS.filter((s) => {
    if (selectedCategory === 'All') return true;
    return s.category === selectedCategory;
  });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Android App UI Gallery"
          title="Official Mobile App Interface Preview"
          arabicTitle="مَعْرِضُ شَاشَاتِ التَّطْبِيقِ الأَكاديمِي"
          subtitle="Explore the clean, modern dark emerald Android user interface designed for distraction-free Islamic studies."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/10'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScreenshots.map((screen) => (
            <div
              key={screen.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all space-y-4 group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[9/16] border border-slate-800 flex items-center justify-center">
                <img
                  src={screen.imageUrl}
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Zoom Icon */}
                <button
                  onClick={() => setActiveImage(screen.imageUrl)}
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer"
                  aria-label={`Enlarge ${screen.title}`}
                >
                  <div className="p-3 rounded-full bg-emerald-700/90 shadow-lg flex items-center gap-2 text-xs font-bold">
                    <Maximize2 className="w-4 h-4" /> Expand Preview
                  </div>
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {screen.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {screen.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-sm w-full bg-slate-900 rounded-3xl p-3 border border-slate-800 shadow-2xl space-y-3" onClick={(e) => e.stopPropagation()}>
              <div className="rounded-2xl overflow-hidden aspect-[9/18]">
                <img src={activeImage} alt="Expanded Screenshot" className="w-full h-full object-cover" />
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition-colors"
              >
                Close Full Screen
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
