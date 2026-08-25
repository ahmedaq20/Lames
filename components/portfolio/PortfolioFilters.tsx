'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Globe, Smartphone, Workflow, Cloud, Palette, type LucideIcon } from 'lucide-react';
import { useTranslation } from '@/locales/translations';

export type CategoryKey = 'all' | 'web' | 'mobile' | 'automation' | 'cloud' | 'design';

interface PortfolioFiltersProps {
  activeCategory: CategoryKey;
  onSelectCategory: (category: CategoryKey) => void;
  categoryCounts: Record<CategoryKey, number>;
}

const filterConfig: { key: CategoryKey; icon: LucideIcon }[] = [
  { key: 'all', icon: LayoutGrid },
  { key: 'web', icon: Globe },
  { key: 'mobile', icon: Smartphone },
  { key: 'automation', icon: Workflow },
  { key: 'cloud', icon: Cloud },
  { key: 'design', icon: Palette },
];

export default function PortfolioFilters({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: PortfolioFiltersProps) {
  const { t } = useTranslation();

  const getLabel = (key: CategoryKey) => {
    switch (key) {
      case 'all':
        return t.portfolio.filters.all;
      case 'web':
        return t.portfolio.filters.web;
      case 'mobile':
        return t.portfolio.filters.mobile;
      case 'automation':
        return t.portfolio.filters.automation;
      case 'cloud':
        return t.portfolio.filters.cloud;
      case 'design':
        return t.portfolio.filters.design;
    }
  };

  return (
    <div className="mx-auto mb-12 flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4 sm:gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200/80 bg-slate-100/80 p-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
        {filterConfig.map(({ key, icon: Icon }) => {
          const isActive = activeCategory === key;
          const count = categoryCounts[key] ?? 0;

          // Don't show category if count is 0 and it's not 'all'
          if (key !== 'all' && count === 0) return null;

          return (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className={`relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                isActive
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="portfolio-filter-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-2xl bg-primary-600 shadow-md shadow-primary-500/25"
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon size={16} />
                <span>{getLabel(key)}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200/80 text-slate-600 dark:bg-white/10 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
