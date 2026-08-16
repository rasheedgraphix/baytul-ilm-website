import React, { useState } from 'react';
import { FEATURES_DATA } from '../../config/featuresData';
import { FeatureCard } from '../common/FeatureCard';
import { SectionHeader } from '../common/SectionHeader';

export const FeatureGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'study' | 'ai' | 'core'>('all');

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'academic', label: 'Dars-e-Nizami & Books' },
    { id: 'study', label: 'Quizzes & Progress' },
    { id: 'ai', label: 'AI Assistant' },
    { id: 'core', label: 'App Settings' },
  ];

  const filteredFeatures = FEATURES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Android Application Features"
          title="Built Into Baytul Ilm AI for Android"
          arabicTitle="مُمَيَّزَاتُ تَطْبِيقِ الأَنْدُرُويْد"
          subtitle="Key learning tools, curriculum index, quizzes, and AI tutor built directly into the official Android application."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/10'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
