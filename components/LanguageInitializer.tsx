'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function LanguageInitializer() {
  const pathname = usePathname();
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const initializeLanguage = useLanguageStore((state) => state.initializeLanguage);

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  useEffect(() => {
    if (!pathname) return;
    if (pathname === '/en' || pathname.startsWith('/en/')) {
      setLanguage('en');
    } else if (pathname === '/ar' || pathname.startsWith('/ar/')) {
      setLanguage('ar');
    }
  }, [pathname, setLanguage]);

  return null;
}
