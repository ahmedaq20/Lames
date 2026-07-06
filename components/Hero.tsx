'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, SearchCheck } from 'lucide-react'

function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 160])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  const titleWords = 'We build systems that work for you'.split(' ')
  const entrance = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  })

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <Image
        src="/images/hero-poster.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(59,130,246,0.16),transparent_48%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28 md:px-12">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: textY, opacity: textOpacity, scale: textScale }}
          className="mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance(0.2)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-6 py-2 text-sm font-medium text-primary-300 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            Digital Product Engineering &amp; Automation
          </motion.div>

          <h1 className="mb-6 text-5xl font-extrabold leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={entrance(0.35 + index * 0.08)}
                className="mr-4 inline-block last:mr-0"
              >
                {index === 2 ? (
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
            className="mx-auto mb-8 max-w-3xl text-base font-light leading-relaxed text-slate-300 md:text-xl"
          >
            Lames engineers secure digital products, intelligent automations, and scalable cloud systems that help businesses operate with less friction and grow with confidence.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance(1.1)}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact#contact-form"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <SearchCheck size={20} />
              Request a Free Audit
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={entrance(1.3)}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">Explore Our Capabilities</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
