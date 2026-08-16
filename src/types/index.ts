export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'core' | 'academic' | 'ai' | 'study';
  highlights: string[];
}

export interface DarsNizamiLevel {
  id: string;
  yearName: string;
  arabicName: string;
  englishTitle: string;
  description: string;
  subjects: {
    name: string;
    arabicName: string;
    coreBooks: string[];
    description: string;
  }[];
}

export interface QuizPreviewQuestion {
  id: string;
  subject: string;
  level: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  caption: string;
  category: 'Home' | 'Dars-e-Nizami' | 'Quiz' | 'AI Tutor' | 'AI Scholar' | 'Library' | 'Offline Mode' | 'Profile';
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'installation' | 'content' | 'ai';
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sources?: string[];
}
