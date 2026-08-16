import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  arabicTitle?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  arabicTitle,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          {badge}
        </div>
      )}

      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {title}
        </h2>
        {arabicTitle && (
          <p className="text-lg sm:text-xl font-serif text-amber-700 dark:text-amber-400 tracking-wide font-normal">
            {arabicTitle}
          </p>
        )}
      </div>

      {/* Subtle Islamic ornament divider */}
      <div className={`flex items-center gap-2 py-1 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400 dark:to-emerald-600"></div>
        <div className="w-2.5 h-2.5 rotate-45 border border-emerald-600 bg-amber-500/20"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400 dark:to-emerald-600"></div>
      </div>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
