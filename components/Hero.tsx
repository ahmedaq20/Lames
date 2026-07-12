'use client'

import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'

const marqueeItems = [
  'UI/UX Design',
  'Web Engineering',
  'Mobile Apps',
  'Headless CMS',
  'n8n Automation',
  'API Integrations',
  'Cloud & DevOps',
  'CI/CD Pipelines',
  'Cybersecurity',
]

// The headline is split per word for the staggered entrance; words from this
// index onward carry the brand gradient (the only gradient text on the site).
const GRADIENT_FROM_WORD = 5

function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  // Subtle parallax only — content must stay readable while scrolling away.
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 60])

  const titleWords = 'Custom software, automation & cloud systems that work for you'.split(' ')
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

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-32 md:px-12">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: textY }}
          className="mx-auto max-w-6xl text-center"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance(0.2)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm font-medium tracking-wide text-primary-300 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            Digital Product Engineering &amp; Automation Agency
          </motion.div>

          <h1 className="mb-8 font-display text-4xl font-bold leading-[1.02] tracking-tighter text-white md:text-6xl lg:text-[5.25rem]">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={entrance(0.35 + index * 0.07)}
                className="mr-3 inline-block last:mr-0 md:mr-4"
              >
                {index >= GRADIENT_FROM_WORD ? (
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
            Lames is one engineering team for the whole system: we design your product,
            build it for web and mobile, automate your operations with AI and n8n, and
            run it on secure, scalable cloud infrastructure.
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

          {/*
            TODO(trust): once real client logos / named references exist, render a
            logo strip here ("Trusted by …"). Do not ship placeholder or invented
            logos — the previous faux stats bar (05 / 100s / A–Z / 24/7) was
            removed deliberately because unverifiable numbers erode trust.
          */}
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={entrance(1.4)}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/5 bg-black/30 py-5 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
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
