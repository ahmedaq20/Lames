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

    // Check URL pathname first for explicit /en or /ar prefix
    const path = window.location.pathname;
    let initialLang: Language;

    if (path === '/en' || path.startsWith('/en/')) {
      initialLang = 'en';
    } else if (path === '/ar' || path.startsWith('/ar/')) {
      initialLang = 'ar';
    } else {
      const savedLang = localStorage.getItem('language') as Language | null;
      initialLang = savedLang === 'en' ? 'en' : 'ar';
    }

    document.documentElement.setAttribute('lang', initialLang);
    document.documentElement.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', initialLang);
    set({ language: initialLang });
  }
}));
