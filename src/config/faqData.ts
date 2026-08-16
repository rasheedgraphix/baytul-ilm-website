import { FaqItem, QuizPreviewQuestion } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Baytul Ilm AI?',
    answer: 'Baytul Ilm AI is an official Android educational application designed specifically for Islamic students, madrasa learners, and teachers of Dars-e-Nizami. It organizes curriculum structures, provides interactive chapter-wise quizzes, tracks study progress, offers an AI learning assistant, and provides a structured PDF reference library.'
  },
  {
    id: 'faq-2',
    category: 'content',
    question: 'Does this website or app host copyrighted PDF books directly?',
    answer: 'Baytul Ilm AI provides a structured educational index and reference system. Some third-party educational materials may be subject to copyright or publisher rights. Users should access and distribute copyrighted materials only with appropriate authorization.'
  },
  {
    id: 'faq-3',
    category: 'installation',
    question: 'How do I install the APK on my Android device?',
    answer: 'Click the "DOWNLOAD APK" button on this website to download the official .apk file. Open your Android Settings, go to Security / Privacy, and enable "Install from Unknown Sources" or "Allow from this source" for your browser/file manager. Then tap the downloaded APK file to complete installation.'
  },
  {
    id: 'faq-4',
    category: 'installation',
    question: 'Is the APK safe and verified?',
    answer: 'Baytul Ilm AI is provided as an official release build. Users should verify the SHA-256 checksum after downloading. VirusTotal scan status is currently: Not yet verified.'
  },
  {
    id: 'faq-5',
    category: 'ai',
    question: 'How does the AI Learning Assistant work?',
    answer: 'The AI Learning Assistant is powered by advanced LLM technology customized for Islamic sciences. It helps students understand Arabic grammar rules (Sarf and Nahw), clarifies legal terms in Fiqh, summarizes Hadith narrator chains, and offers contextual study explanations.'
  },
  {
    id: 'faq-6',
    category: 'content',
    question: 'Can I use Baytul Ilm AI offline?',
    answer: 'Yes! Core features such as saved quiz questions, Dars-e-Nizami syllabus outlines, local PDF book index, student bookmarks, and progress analytics work 100% offline without requiring an active internet connection.'
  }
];

export const SAMPLE_QUIZ_QUESTIONS: QuizPreviewQuestion[] = [
  {
    id: 'q1',
    subject: 'Arabic Syntax (Nahw)',
    level: 'Year 1 - Nahw Mir',
    difficulty: 'Beginner',
    question: 'In Arabic grammar (Nahw), what is the technical definition of "Al-Kalimah" (الْكَلِمَةُ)?',
    options: [
      'A meaningful compound sentence (Kalam)',
      'A single word coined to convey a single meaning (Lafdhun Wudi\'a Li Ma\'nan Mufradin)',
      'A particle that has no independent meaning',
      'An uninflected verb past tense form'
    ],
    correctAnswer: 1,
    explanation: 'Classical Nahw defines Al-Kalimah as "Lafdhun Wudi\'a Li Ma\'nan Mufradin" (A single articulated word coined for a single meaning), divided into Ism (Noun), Fi\'l (Verb), and Harf (Particle).'
  },
  {
    id: 'q2',
    subject: 'Arabic Morphology (Sarf)',
    level: 'Year 1 - Ilm-us-Sarf',
    difficulty: 'Intermediate',
    question: 'Which scale (Wazn) represents the 3-letter past tense verb in "Bab Nasara Yansuru" (باب نَصَرَ يَنْصُرُ)?',
    options: [
      'Fa\'ala Yaf\'ilu (فَعَلَ يَفْعِلُ)',
      'Fa\'ala Yaf\'ulu (فَعَلَ يَفْعُلُ)',
      'Fa\'ila Yaf\'alu (فَعِلَ يَفْعَلُ)',
      'Fa\'ula Yaf\'ulu (فَعُلَ يَفْعُلُ)'
    ],
    correctAnswer: 1,
    explanation: 'Bab Nasara Yansuru follows the scale Fa\'ala Yaf\'ulu (فَعَلَ يَفْعُلُ), where the middle radical (Ayn Kalimah) has a Fathah in past tense and Dammah in present tense.'
  },
  {
    id: 'q3',
    subject: 'Hanafi Fiqh',
    level: 'Year 2 - Mukhtasar-ul-Quduri',
    difficulty: 'Intermediate',
    question: 'According to Mukhtasar-ul-Quduri, how many obligatory components (Fara\'id) are there in Wudu?',
    options: [
      '3 obligatory acts',
      '4 obligatory acts (Washing face, arms to elbows, wiping 1/4 head, washing feet to ankles)',
      '6 obligatory acts',
      '12 obligatory acts'
    ],
    correctAnswer: 1,
    explanation: 'The 4 Fard acts of Wudu established directly by Surah Al-Ma\'idah verse 6 are: 1) Washing face once, 2) Washing both hands up to elbows once, 3) Wiping one-fourth of head, 4) Washing both feet up to ankles once.'
  },
  {
    id: 'q4',
    subject: 'Hadith Methodology (Usul-ul-Hadith)',
    level: 'Year 5 - Nukhbat-ul-Fikar',
    difficulty: 'Advanced',
    question: 'What is a Hadith termed when it is narrated by a continuous chain of trustworthy narrators (Adl Dabit) free from subtle defects (Illah) and irregularity (Shadhudh)?',
    options: [
      'Hadith Hasan (Good)',
      'Hadith Sahih Lidhadihi (Authentic in itself)',
      'Hadith Da\'if (Weak)',
      'Hadith Mursal (Hanging)'
    ],
    correctAnswer: 1,
    explanation: 'Ibn Hajar Al-Asqalani in Nukhbat-ul-Fikar defines Sahih Lidhadihi as a report transmitted by upright (Adl), precise (Dabit) narrators with an unbroken chain (Ittisal) without Shadhudh (irregularity) or Illah Qadihah (damaging defect).'
  }
];
