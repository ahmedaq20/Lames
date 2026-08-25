'use client';

import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#05070d]">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </main>
  );
}
