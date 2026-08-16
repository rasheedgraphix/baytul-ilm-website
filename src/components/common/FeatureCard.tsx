import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = '' }) => {
  // Dynamically retrieve the Lucide icon or fallback to BookOpen
  const IconComponent = (LucideIcons as Record<string, any>)[feature.iconName] || LucideIcons.BookOpen;

  return (
    <div
      className={`group relative bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      {/* Top accent glow on hover */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-full"></div>

      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-700 group-hover:text-white transition-all">
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      {feature.highlights && feature.highlights.length > 0 && (
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
          {feature.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/80 dark:bg-emerald-400 shrink-0"></span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
