'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Wrench, Sparkles, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/locales/translations';
import { ProjectItem } from './ProjectCard';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, isRtl } = useTranslation();

  // Handle ESC key to close modal & lock body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:bg-primary-500/20 dark:text-primary-400">
                <Sparkles size={13} />
                {project.categoryLabel}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {t.portfolio.ui.clientLabel}: <strong className="text-slate-800 dark:text-slate-200">{project.client}</strong>
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-white/10 dark:text-slate-400 dark:hover:bg-white/20 dark:hover:text-white"
              aria-label={t.portfolio.ui.closeModal}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
            {/* Project Banner & Title */}
            <div>
              <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {project.title}
              </h2>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 900px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Impact Metrics Banner */}
            <div className="rounded-2xl border border-primary-500/20 bg-primary-50/50 p-5 dark:border-primary-500/30 dark:bg-primary-950/20">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                {t.portfolio.ui.keyMetrics}
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/60 bg-white/80 p-4 text-center shadow-xs dark:border-white/5 dark:bg-white/[0.04]"
                  >
                    <div className="font-display text-2xl font-extrabold text-primary-600 dark:text-primary-400 sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution 2-Column Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Challenge */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                <div className="mb-3 flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <AlertCircle size={20} />
                  <h4 className="font-display text-lg font-bold">{t.portfolio.ui.theChallenge}</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                <div className="mb-3 flex items-center gap-2 text-primary-600 dark:text-primary-400">
                  <Wrench size={20} />
                  <h4 className="font-display text-lg font-bold">{t.portfolio.ui.theSolution}</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div>
              <h4 className="mb-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                {t.portfolio.ui.keyResults}
              </h4>
              <ul className="space-y-3">
                {project.results.map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 dark:border-white/5 dark:bg-white/[0.03]"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.portfolio.ui.techStack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-slate-200 bg-slate-100/80 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/95 px-6 py-4 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 sm:px-8">
            <p className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-start">
              {t.portfolio.cta.title}
            </p>
            <div className="flex w-full sm:w-auto items-center gap-2">
              <a
                href="https://wa.me/966541897150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                <MessageCircle size={15} />
                <span>واتساب</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary-500/25 transition-all hover:bg-primary-500"
              >
                <span>{t.portfolio.ui.startProjectCta}</span>
                {isRtl ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
