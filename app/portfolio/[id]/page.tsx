'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Layers,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { useTranslation } from '@/locales/translations';
import { ProjectItem } from '@/components/portfolio/ProjectCard';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { t, isRtl } = useTranslation();

  const projects = (t.portfolio.projects as unknown as ProjectItem[]) || [];
  const currentIndex = projects.findIndex((p) => p.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <main className="min-h-screen bg-white pb-24 pt-32 transition-colors duration-300 dark:bg-[#05070d] md:pt-40">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-600/15 via-accent-500/10 to-transparent blur-[140px] dark:from-primary-600/20 dark:via-accent-500/15" />
      {isRtl && (
        <div className="pointer-events-none absolute right-10 top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Navigation & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur-md transition-all hover:bg-white hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {isRtl ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
            <span>{isRtl ? 'العودة إلى معرض الأعمال' : 'Back to Portfolio'}</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/20 bg-primary-500/10 px-3.5 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
              {project.categoryLabel}
            </span>
            <span className="rounded-full border border-slate-200/80 bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {project.client}
            </span>
          </div>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-4xl"
        >
          <h1 className="mb-6 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            {project.summary}
          </p>
        </motion.div>

        {/* Featured Visual Mockup Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 shadow-2xl dark:border-white/10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </motion.div>

        {/* Key Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 overflow-hidden rounded-3xl border border-primary-500/20 bg-primary-50/60 p-8 shadow-sm dark:border-primary-500/30 dark:bg-primary-950/20 md:p-10"
        >
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            {t.portfolio.ui.keyMetrics}
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/80 bg-white/90 p-6 text-center shadow-xs backdrop-blur-md dark:border-white/5 dark:bg-white/[0.04]"
              >
                <div className="font-display text-3xl font-extrabold tracking-tight text-primary-600 dark:text-primary-400 md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenge & Solution Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02] md:p-10"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-2xl bg-amber-500/10 px-4 py-2 text-amber-600 dark:text-amber-400">
                <AlertCircle size={20} />
                <h3 className="font-display text-lg font-bold">{t.portfolio.ui.theChallenge}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {project.challenge}
              </p>
            </div>
          </motion.div>

          {/* The Engineering Solution */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02] md:p-10"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-2xl bg-primary-500/10 px-4 py-2 text-primary-600 dark:text-primary-400">
                <Wrench size={20} />
                <h3 className="font-display text-lg font-bold">{t.portfolio.ui.theSolution}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Results & Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/40 md:p-10"
        >
          <h3 className="mb-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
            {t.portfolio.ui.keyResults}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 dark:border-white/5 dark:bg-white/[0.02]"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/40 md:p-10"
        >
          <div className="mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
            <Layers size={20} className="text-primary-500" />
            <h3 className="font-display text-xl font-bold">{t.portfolio.ui.techStack}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-slate-200 bg-slate-100/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Prev / Next Project Navigation Bar */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Previous Project */}
          <Link
            href={`/portfolio/${prevProject.id}`}
            className="group flex items-center justify-between rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 transition-all duration-300 hover:border-primary-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-xs transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1 dark:bg-white/10 dark:text-white">
                {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {isRtl ? 'المشروع السابق' : 'Previous Project'}
                </span>
                <h4 className="font-display text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                  {prevProject.title}
                </h4>
              </div>
            </div>
          </Link>

          {/* Next Project */}
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center justify-between rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 transition-all duration-300 hover:border-primary-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {isRtl ? 'المشروع التالي' : 'Next Project'}
                </span>
                <h4 className="font-display text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                  {nextProject.title}
                </h4>
              </div>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-xs transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 dark:bg-white/10 dark:text-white">
              {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </div>
          </Link>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-primary-500/20 bg-gradient-to-b from-primary-900/20 via-slate-900/60 to-slate-950 p-8 text-center shadow-2xl backdrop-blur-2xl dark:border-white/10 sm:p-12 md:p-16"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.portfolio.cta.title}
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300">
            {t.portfolio.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-500 hover:scale-105"
            >
              <span>{t.portfolio.cta.button}</span>
              {isRtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
            </Link>

            <a
              href="https://wa.me/966541897150"
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
    </main>
  );
}
