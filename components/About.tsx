'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Workflow, Cloud, Palette, ShieldCheck, type LucideIcon } from 'lucide-react';
import { PrimaryCta } from '@/components/ui/Button';
import { Accent } from '@/components/ui/SectionHeading';
import { useTranslation } from '@/locales/translations';

const capabilityIcons: LucideIcon[] = [Code2, Workflow, Cloud, Palette];

function About() {
  const { t, isRtl } = useTranslation();

  const capabilities = t.about.capabilities.map((item, i) => ({
    title: item.title,
    description: item.description,
    icon: capabilityIcons[i] || Code2,
  }));

  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-12 relative bg-white dark:bg-slate-900/30 transition-colors duration-300 overflow-hidden">
      {/* Arabian Coffee & Hospitality Backdrop for Arabic mode */}
      {isRtl && (
        <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-50 transition-opacity duration-700">
          <Image
            src="/images/arabic-about-coffee.jpg"
            alt="Arabian Hospitality & Coffee Backdrop"
            fill
            sizes="100vw"
            className="object-cover object-center -scale-x-100 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-white dark:from-[#05070d] dark:via-[#05070d]/60 dark:to-[#05070d]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 dark:from-[#05070d]/60 dark:via-transparent dark:to-[#05070d]/60" />
        </div>
      )}

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-600/5 blur-[120px] dark:bg-primary-600/10" />
      {isRtl && (
        <div className="pointer-events-none absolute top-10 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative order-2 md:order-1 w-full"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary-600/30 via-transparent to-accent-500/30 blur-2xl" />

          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
            <Image
              src="/images/about-team.jpg"
              alt="Lames engineering team working together"
              width={1200}
              height={800}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Caption inside the image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">{t.about.imageBadge.tagline}</p>
              <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-white/90">
                {t.about.imageBadge.text}
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-6 -right-4 md:-right-8 rtl:-right-auto rtl:-left-4 rtl:md:-left-8 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 pr-5 rtl:pr-4 rtl:pl-5 shadow-xl dark:border-white/10 dark:bg-slate-950"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 shrink-0">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{t.about.floatingBadge.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.floatingBadge.subtitle}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-10 order-1 md:order-2"
        >
          <div>
            <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">{t.about.eyebrow}</h3>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              {t.about.titleMain} <br />
              <Accent>{t.about.titleAccent}</Accent>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                className="group flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors duration-300 hover:border-primary-500/30 hover:bg-white dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white dark:text-primary-400">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Facts */}
          <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-white/10">
            {t.about.facts.map((fact) => (
              <div key={fact.value}>
                <p className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400 md:text-3xl">{fact.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{fact.label}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PrimaryCta />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
