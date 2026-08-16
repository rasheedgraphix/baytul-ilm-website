import React from 'react';
import { APP_CONFIG } from '../../config/appConfig';

export const QuickStats: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {APP_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-center space-y-1 hover:border-emerald-500/40 transition-all"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800 dark:text-emerald-400 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
