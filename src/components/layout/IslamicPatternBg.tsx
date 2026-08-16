import React from 'react';

interface IslamicPatternBgProps {
  className?: string;
  variant?: 'subtle' | 'hero' | 'accent';
}

export const IslamicPatternBg: React.FC<IslamicPatternBgProps> = ({
  className = '',
  variant = 'subtle'
}) => {
  const opacityClass =
    variant === 'hero'
      ? 'opacity-10'
      : variant === 'accent'
      ? 'opacity-15'
      : 'opacity-5';

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full h-full text-emerald-950 dark:text-emerald-300 ${opacityClass}`}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="islamic-star-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed star and geometric lattice motif */}
            <path
              d="M40 0 L49 23 L73 15 L65 39 L80 57 L56 57 L40 80 L24 57 L0 57 L15 39 L7 15 L31 23 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M40 10 L46 27 L64 21 L58 39 L70 53 L51 53 L40 70 L29 53 L10 53 L22 39 L16 21 L34 27 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="40" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="80" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="0" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="80" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
      </svg>
    </div>
  );
};
