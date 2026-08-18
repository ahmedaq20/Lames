import { useLanguageStore, Language } from '@/store/useLanguageStore';
import { en } from './en';
import { ar } from './ar';

export const translations = {
  en,
  ar,
} as const;

export type TranslationType = typeof ar;

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  const t = translations[language] || translations.ar;
  const isRtl = language === 'ar';

  return {
    t,
    language,
    setLanguage,
    toggleLanguage,
    isRtl,
  };
}

export function getTranslation(lang: Language): TranslationType {
  return translations[lang] || translations.ar;
}
