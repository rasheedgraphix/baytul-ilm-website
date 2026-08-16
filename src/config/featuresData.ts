import { FeatureItem } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'dars-e-nizami',
    title: 'Dars-e-Nizami Curriculum',
    description: 'Systematic curriculum index mapping from A\'la (Class 1) to Dora-e-Hadith for madrasa students directly inside the app.',
    iconName: 'GraduationCap',
    category: 'academic',
    highlights: ['Organized by 8 academic years', 'Sarf, Nahw, Fiqh & Usul index', 'Year-by-year syllabus tracking']
  },
  {
    id: 'quran-resources',
    title: 'Quranic Resources',
    description: 'Complete Quranic text with word-by-word grammar breakdowns, translations, and verse analysis in the Android app.',
    iconName: 'Book',
    category: 'core',
    highlights: ['Word-by-word morphological analysis', 'Multiple classical translations', 'Verse bookmarking & study notes']
  },
  {
    id: 'chapter-quizzes',
    title: 'Chapter-wise Quizzes',
    description: 'Interactive multiple-choice assessment sets after each subject chapter to test knowledge inside the app.',
    iconName: 'HelpCircle',
    category: 'study',
    highlights: ['Topic-focused MCQ pools', 'Immediate option verification', 'Detailed answer explanations']
  },
  {
    id: 'ai-assistant',
    title: 'AI Learning Assistant',
    description: 'An on-device AI tutor in the Android app answering questions on Sarf conjugations, Nahw rules, and Fiqh terminology.',
    iconName: 'Bot',
    category: 'ai',
    highlights: ['Grammar & syntax breakdown', 'Verified book citations', 'Multilingual Arabic, Urdu & English']
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    description: 'Monitor overall syllabus completion, subject mastery, streak days, and quiz analytics on your Android device.',
    iconName: 'BarChart3',
    category: 'study',
    highlights: ['Visual progress bars & score analytics', 'Daily learning streak tracker', 'Subject-wise mastery stats']
  },
  {
    id: 'reference-index',
    title: 'Book & Reference Index',
    description: 'Structured index enabling madrasa students to organize, cross-reference, and locate classical primers.',
    iconName: 'BookOpen',
    category: 'academic',
    highlights: ['Subject & author categorization', 'Searchable reference metadata', 'Cross-referenced study notes']
  },
  {
    id: 'bookmarks',
    title: 'Smart Bookmarks',
    description: 'Save key definitions, complex grammar rules, difficult quiz questions, and important pages instantly.',
    iconName: 'Bookmark',
    category: 'core',
    highlights: ['One-tap bookmarking', 'Custom tagged collections', 'Quick jump-to-source navigation']
  },
  {
    id: 'dark-light-mode',
    title: 'Dark / Light Mode',
    description: 'Eye-friendly app themes tailored for comfortable late-night revision and crisp daytime reading.',
    iconName: 'Moon',
    category: 'core',
    highlights: ['Amoled dark emerald theme', 'High contrast light reader', 'Automatic system theme matching']
  }
];
