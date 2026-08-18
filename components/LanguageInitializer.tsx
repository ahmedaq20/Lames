'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function LanguageInitializer() {
  const initializeLanguage = useLanguageStore((state) => state.initializeLanguage);

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  return null;
}
