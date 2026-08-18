import { create } from 'zustand';

export type Language = 'ar' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  initializeLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: 'ar', // Default initial state to Arabic

  setLanguage: (newLang: Language) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', newLang);
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      localStorage.setItem('language', newLang);
    }
    set({ language: newLang });
  },

  toggleLanguage: () => {
    const { language, setLanguage } = get();
    const newLang: Language = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  },

  initializeLanguage: () => {
    if (typeof window === 'undefined') return;
    const savedLang = localStorage.getItem('language') as Language | null;
    const initialLang: Language = savedLang === 'en' ? 'en' : 'ar'; // Default to Arabic if not specified

    document.documentElement.setAttribute('lang', initialLang);
    document.documentElement.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr');
    set({ language: initialLang });
  }
}));
