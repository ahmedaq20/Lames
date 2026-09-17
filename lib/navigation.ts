import { Language } from '@/store/useLanguageStore';

/**
 * Localizes an internal path based on language.
 * - If language is 'en', prepends '/en' (e.g. '/contact' -> '/en/contact', '/' -> '/en')
 * - If language is 'ar', strips '/en' or '/ar' prefix so it maps cleanly to the base route.
 */
export function localizePath(path: string, language: Language): string {
  // Strip any existing /en or /ar prefix
  const clean = path.replace(/^\/(en|ar)(\/|$)/, '/');

  if (language === 'en') {
    if (clean === '/' || clean === '') return '/en';
    if (clean.startsWith('/#')) return `/en${clean}`;
    return `/en${clean.startsWith('/') ? clean : `/${clean}`}`;
  }

  // Arabic default base paths
  return clean || '/';
}
