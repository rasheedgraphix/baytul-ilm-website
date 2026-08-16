import { AppScreenshot } from '../types';
import homeImg from '../assets/images/real_screenshot_home_1786582226379.jpg';
import libraryImg from '../assets/images/real_screenshot_library_1786582239390.jpg';
import quizImg from '../assets/images/real_screenshot_quiz_1786582251020.jpg';
import aiImg from '../assets/images/real_screenshot_ai_1786582263101.jpg';
import offlineImg from '../assets/images/real_screenshot_offline_1786582277604.jpg';
import profileImg from '../assets/images/real_screenshot_profile_1786582291674.jpg';

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: 's1',
    title: 'Main App Home & Prayer Times',
    caption: 'Official Baytul Ilm AI v1.3.6 Android home screen featuring Islamabad prayer times, search bar, and Dars-e-Nizami syllabus highlights.',
    category: 'Home',
    imageUrl: homeImg
  },
  {
    id: 's2',
    title: 'Digital Library & Dars-e-Nizami Syllabus',
    caption: 'Systematic breakdown of 8 academic syllabus levels (Darja Ula to Dora-e-Hadith) with subjects, books, and syllabus progress tracking.',
    category: 'Library',
    imageUrl: libraryImg
  },
  {
    id: 's3',
    title: 'Islamic Quiz & Assessment System',
    caption: 'Chapter-wise quiz module featuring Elementary (ابتدائی), Intermediate (درمیانی), and Advanced (اعلیٰ) level assessments for madrasa students.',
    category: 'Quiz',
    imageUrl: quizImg
  },
  {
    id: 's4',
    title: 'Baytul Ilm AI Scholar (Gemini AI)',
    caption: 'On-device Islamic AI Scholar providing verified textbook references, page citations, and Sarf/Nahw syntax explanations.',
    category: 'AI Scholar',
    imageUrl: aiImg
  },
  {
    id: 's5',
    title: 'Offline Library & Downloaded Content',
    caption: 'Access Kutub, PDFs, study notes, and quiz packs without requiring an active internet connection.',
    category: 'Offline Mode',
    imageUrl: offlineImg
  },
  {
    id: 's6',
    title: 'User Profile & App Settings',
    caption: 'Student profile manager with student verification badge, reading stats, language toggle, and dark/light mode customization.',
    category: 'Profile',
    imageUrl: profileImg
  }
];
