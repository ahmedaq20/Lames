import { Language } from '@/store/useLanguageStore';

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappUrl: string;
}

export const CONTACT_INFO: Record<Language, ContactInfo> = {
  ar: {
    phoneDisplay: '+966 54 189 7150',
    phoneHref: 'tel:+966541897150',
    whatsappNumber: '966541897150',
    whatsappUrl: 'https://wa.me/966541897150',
  },
  en: {
    phoneDisplay: '+1 (737) 378-1796',
    phoneHref: 'tel:+17373781796',
    whatsappNumber: '17373781796',
    whatsappUrl: 'https://wa.me/17373781796',
  },
};

export function getContactInfo(language: Language = 'ar'): ContactInfo {
  return CONTACT_INFO[language] || CONTACT_INFO.ar;
}
