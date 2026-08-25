'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Accent } from '@/components/ui/SectionHeading';
import { useTranslation } from '@/locales/translations';

const statIcons = [ShieldCheck, Zap, Layers, Sparkles];

export default function PortfolioHero() {
  const { t, isRtl } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-white pb-12 pt-36 transition-colors duration-300 dark:bg-[#05070d] md:pb-20 md:pt-44">
      {/* Arabic Mode Cultural Ambient Backdrop */}
      {isRtl && (
        <div className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-30 transition-opacity duration-700">
          <Image
            src="/images/arabic-hero-desert.jpg"
            alt="Arabian Tech Atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white dark:from-[#05070d] dark:via-[#05070d]/70 dark:to-[#05070d]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70 dark:from-[#05070d]/70 dark:via-transparent dark:to-[#05070d]/70" />
        </div>
      )}

      {/* Atmospheric Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-600/15 via-accent-500/10 to-transparent blur-[130px] dark:from-primary-600/20 dark:via-accent-500/15" />
      {isRtl && (
        <div className="pointer-events-none absolute right-10 top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-display leading-[1.3] text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            {t.portfolio.titleMain} <br className="hidden sm:inline" />
            <Accent>{t.portfolio.titleAccent}</Accent>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl"
          >
            {t.portfolio.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
