'use client'

import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Compass, PenTool, Code2, Workflow, Rocket, ArrowUpRight, Clock3, type LucideIcon } from 'lucide-react'
import { SectionHeading, Accent } from '@/components/ui/SectionHeading'
import { useTranslation } from '@/locales/translations'

interface Step {
  number: string
  title: string
  tagline: string
  description: string
  deliverables: readonly string[]
  duration: string
  icon: LucideIcon
}

const stepIcons: Record<string, LucideIcon> = {
  '01': Compass,
  '02': PenTool,
  '03': Code2,
  '04': Workflow,
  '05': Rocket,
}

function StepCard({ step, typicalDurationLabel }: { step: Step; typicalDurationLabel: string }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-white/[0.06] dark:bg-slate-900/50 dark:hover:bg-slate-900/80">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <step.icon size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
            {step.tagline}
          </p>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
        </div>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.description}</p>

      <ul className="mb-5 flex flex-wrap gap-2">
        {step.deliverables.map((deliverable) => (
          <li
            key={deliverable}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:border-primary-500/30 group-hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:group-hover:text-slate-200"
          >
            <ArrowUpRight size={11} className="text-primary-500 rtl:-scale-x-100" aria-hidden="true" />
            {deliverable}
          </li>
        ))}
      </ul>

      <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Clock3 size={13} className="text-primary-500 shrink-0" aria-hidden="true" />
        {typicalDurationLabel} {step.duration}
      </p>
    </div>
  )
}

function Process() {
  const { t, isRtl } = useTranslation()
  const reduceMotion = useReducedMotion()
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  const lineScale = useTransform(progress, [0, 1], [0, 1])

  const steps: Step[] = t.process.steps.map((s) => ({
    number: s.number,
    title: s.title,
    tagline: s.tagline,
    description: s.description,
    deliverables: s.deliverables,
    duration: s.duration,
    icon: stepIcons[s.number] || Compass,
  }))

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-[#05070d] md:px-12 md:py-32"
    >
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[140px]" />

      {/* Arabian Desert Trail Glow for Arabic mode */}
      {isRtl && (
        <>
          <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-primary-500/15 blur-[140px]" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={
            <>
              {t.process.titleMain} <Accent>{t.process.titleAccent}</Accent>
            </>
          }
          description={t.process.description}
          className="mb-16 md:mb-20"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-10">
            {/* Track */}
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-slate-200 dark:bg-white/[0.07]" />
            {/* Animated fill */}
            <motion.div
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 origin-left rtl:origin-right bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
            />
            <div className="relative grid grid-cols-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.25 + index * 0.22 }}
                  className="flex justify-center"
                >
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary-500/30 bg-white text-sm font-bold text-primary-600 shadow-lg shadow-primary-500/10 dark:bg-slate-950 dark:text-primary-400">
                    {step.number}
                    <span className="absolute inset-0 rounded-full bg-primary-500/20 blur-md" aria-hidden="true" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <StepCard step={step} typicalDurationLabel={t.process.typicalDuration} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div ref={timelineRef} className="relative lg:hidden">
          {/* Track */}
          <div className="absolute bottom-8 left-6 rtl:left-auto rtl:right-6 top-8 w-px -translate-x-1/2 rtl:translate-x-1/2 bg-slate-200 dark:bg-white/[0.07]" />
          {/* Animated fill */}
          <motion.div
            style={{ scaleY: reduceMotion ? 1 : lineScale }}
            className="absolute bottom-8 left-6 rtl:left-auto rtl:right-6 top-8 w-px -translate-x-1/2 rtl:translate-x-1/2 origin-top bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative grid grid-cols-[3rem_1fr] items-start gap-4">
                <motion.div
                  initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                  className="relative z-10 flex justify-center pt-8"
                >
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-primary-500/30 bg-white text-xs font-bold text-primary-600 shadow-lg shadow-primary-500/10 dark:bg-slate-950 dark:text-primary-400">
                    {step.number}
                    <span className="absolute inset-0 rounded-full bg-primary-500/20 blur-md" aria-hidden="true" />
                  </span>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <StepCard step={step} typicalDurationLabel={t.process.typicalDuration} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
