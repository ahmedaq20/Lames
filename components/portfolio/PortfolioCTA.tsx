'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import { useTranslation } from '@/locales/translations';
import { getContactInfo } from '@/lib/contact';

export default function PortfolioCTA() {
  const { t, isRtl, language } = useTranslation();
  const contact = getContactInfo(language);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-primary-500/20 bg-gradient-to-b from-primary-900/20 via-slate-900/60 to-slate-950 p-8 text-center shadow-2xl backdrop-blur-2xl dark:border-white/10 sm:p-12 md:p-16"
        >
          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

          {/* Headline */}
          <h2 className="mb-6 leading-[1.3] font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.portfolio.cta.title}
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.portfolio.cta.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-500 hover:scale-105"
            >
              <span>{t.portfolio.cta.button}</span>
              {isRtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
            </Link>

            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 text-sm font-bold text-emerald-400 backdrop-blur-md transition-all duration-300 hover:bg-emerald-500/20 hover:scale-105"
            >
              <MessageCircle size={18} />
              <span>{t.portfolio.cta.secondaryButton}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
