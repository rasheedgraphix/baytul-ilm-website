import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { APP_CONFIG } from '../config/appConfig';
import { ShieldCheck, Lock, FileText, Eye } from 'lucide-react';
import { IslamicPatternBg } from '../components/layout/IslamicPatternBg';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-16 overflow-hidden">
        <IslamicPatternBg variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <SectionHeader
            badge="Legal Transparency"
            title="Privacy Policy"
            arabicTitle="سِيَاسَةُ الْخُصُوصِيَّة"
            subtitle={`Official Privacy Policy for the Baytul Ilm AI Android Application (${APP_CONFIG.packageName}).`}
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="space-y-2 pb-6 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-500">Effective Date: August 2026</span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              1. Overview & Commitment
            </h2>
            <p>
              {APP_CONFIG.appName} ("we", "our", "us") respects the privacy of our users ("user", "you"). This Privacy Policy explains how our Android educational application ({APP_CONFIG.packageName}) and official website collect, use, and safeguard your information when you use our services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              2. Data Collection & Offline Privacy
            </h2>
            <p>
              <strong>Local On-Device Storage:</strong> Baytul Ilm AI is engineered to operate predominantly offline. Your study bookmarks, quiz progress, Dars-e-Nizami syllabus completion tracking, and saved notes are stored locally on your device's internal storage using standard Android key-value preferences and databases.
            </p>
            <p>
              <strong>No Unsolicited Tracking:</strong> We do not include third-party advertising SDKs, location-tracking services, or invasive analytics tools in our mobile builds.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              3. AI Learning Assistant Queries
            </h2>
            <p>
              When you interact with the optional AI Learning Assistant feature, your submitted text question is processed to generate contextual explanations regarding Arabic grammar, Fiqh terminology, or Hadith classification. Questions are transmitted securely over SSL/TLS and are not linked to your personal identity.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              4. Intellectual Property & Digital Rights
            </h2>
            <p>
              Baytul Ilm AI provides a structured educational index and reference system. Some third-party educational materials may be subject to copyright or publisher rights. Users should access and distribute copyrighted materials only with appropriate authorization.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              5. Contact Information
            </h2>
            <p>
              For privacy inquiries, technical support, or copyright verification, please contact us at: <br />
              <strong className="text-emerald-700 dark:text-emerald-400">{APP_CONFIG.supportEmail}</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
