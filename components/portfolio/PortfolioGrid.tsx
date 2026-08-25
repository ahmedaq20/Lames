'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/locales/translations';
import PortfolioFilters, { CategoryKey } from './PortfolioFilters';
import ProjectCard, { ProjectItem } from './ProjectCard';

export default function PortfolioGrid() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const projects = useMemo(
    () => (t.portfolio.projects as unknown as ProjectItem[]) || [],
    [t.portfolio.projects]
  );

  // Calculate project counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryKey, number> = {
      all: projects.length,
      web: 0,
      mobile: 0,
      automation: 0,
      cloud: 0,
      design: 0,
    };

    projects.forEach((proj) => {
      const cat = proj.category as CategoryKey;
      if (counts[cat] !== undefined) {
        counts[cat] += 1;
      }
    });

    return counts;
  }, [projects]);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section className="relative w-full py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Filters */}
        <PortfolioFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* Smooth Animated Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-500 dark:text-slate-400">
            <p className="text-base">{t.portfolio.ui.noProjects}</p>
          </div>
        )}
      </div>
    </section>
  );
}
