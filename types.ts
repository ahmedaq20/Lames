import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features?: string[];
  ctaText?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}