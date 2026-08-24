'use client'

import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'
import { useTranslation } from '@/locales/translations'
import DesertDunesVisual from '@/components/visuals/DesertDunesVisual'

function Hero() {
  const { t, isRtl } = useTranslation()
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  // Subtle parallax only — content must stay readable while scrolling away.
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 60])

  const titleWords = t.hero.titleWords
  const gradientStart = t.hero.gradientStartWordIndex
  const marqueeItems = t.hero.marquee

  const entrance = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  })

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#030509]"
    >
      {/* Layered gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.28),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(147,51,234,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_90%,rgba(37,99,235,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-320px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/25 blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-primary-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] rounded-full bg-accent-600/15 blur-[140px]" />
      {/* Horizon light behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-[26%] h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

      {/* Arabian Desert Dunes & Minimalist Tech Camel Caravan for Arabic mode */}
      {isRtl && <DesertDunesVisual intensity="full" />}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-32 md:px-12">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: textY }}
          className="mx-auto max-w-6xl text-center"
        >
          {/* <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance(0.2)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm font-medium tracking-wide text-primary-300 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            {t.hero.badge}
          </motion.div> */}

          <h1 className="mb-8 font-display text-4xl font-bold leading-[1.12] md:leading-[1.05] tracking-tight md:tracking-tighter text-white md:text-6xl lg:text-[5rem]">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}-${isRtl}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={entrance(0.35 + index * 0.07)}
                className="mx-1.5 md:mx-2.5 inline-block"
              >
                {index >= gradientStart ? (
                  <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={entrance(0.95)}
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance(1.1)}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <PrimaryCta size="lg" />
            <SecondaryCta size="lg" onDark />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={entrance(1.4)}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/5 bg-black/30 py-5 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 rtl:pl-10 rtl:pr-0 motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500/60" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
