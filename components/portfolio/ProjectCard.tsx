'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useTranslation } from '@/locales/translations';

export interface ProjectItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  client: string;
  summary: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string[];
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, isRtl } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-primary-500/50 dark:hover:shadow-primary-500/20"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-primary-500/20" />

      {/* Image Preview Container */}
      <Link
        href={`/portfolio/${project.id}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-950"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Category & Client Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {project.categoryLabel}
          </span>
          <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
            {project.client}
          </span>
        </div>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-5 py-2.5 text-xs font-bold text-slate-900 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-105 dark:bg-slate-900/90 dark:text-white dark:border-white/20">
            <span>{t.portfolio.ui.viewDetails}</span>
            <ArrowUpRight size={16} className={isRtl ? '-scale-x-100 text-primary-500' : 'text-primary-500'} />
          </span>
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Title */}
        <Link href={`/portfolio/${project.id}`}>
          <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {project.title}
          </h3>
        </Link>

        {/* Summary Description */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.summary}
        </p>

        {/* Key Metrics Pills */}
        <div className="mb-6 grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 dark:border-white/5 dark:bg-white/[0.02]">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <span className="block font-display text-base font-bold text-primary-600 dark:text-primary-400">
                {metric.value}
              </span>
              <span className="block text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-lg border border-transparent bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Action Button */}
        <div className="border-t border-slate-100 pt-4 dark:border-white/10">
          <Link
            href={`/portfolio/${project.id}`}
            className="flex w-full items-center justify-between text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            <span>{t.portfolio.ui.viewDetails}</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 dark:bg-primary-500/10">
              <ArrowUpRight size={15} className={isRtl ? '-scale-x-100' : ''} />
            </div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
