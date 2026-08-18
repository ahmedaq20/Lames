'use client'

import Image from 'next/image'
import { CalendarCheck, Clock3, FileText, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'
import { useTranslation } from '@/locales/translations'

const expectationIcons: LucideIcon[] = [CalendarCheck, Clock3, FileText]

function Idea() {
  const { t, isRtl } = useTranslation()

  const expectations = t.idea.expectations.map((text, i) => ({
    icon: expectationIcons[i] || CalendarCheck,
    text,
  }))

  return (
    <section id="start" className="w-full border-t border-slate-200 bg-slate-50 pt-20 transition-colors duration-300 dark:border-white/5 dark:bg-[#05070d]">
      <div className="mb-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#04060c] p-10 text-center shadow-2xl shadow-primary-500/10 md:p-20"
        >
          {/* Photorealistic Arabian Oasis Night Backdrop for Arabic mode */}
          {isRtl && (
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <Image
                src="/images/arabic-idea-desert.jpg"
                alt="Arabian Desert Oasis"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-[#04060c]/60 to-[#04060c]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#04060c]/80 via-transparent to-[#04060c]/80" />
            </div>
          )}

          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-600/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />
          
          {/* Subtle Warm Amber Glow for Arabic mode */}
          {isRtl && (
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full -translate-x-1/2 bg-gradient-to-t from-amber-500/15 via-primary-500/10 to-transparent blur-3xl" />
          )}

          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary-400">
              {t.idea.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              {t.idea.titleMain} <span className="text-primary-400">{t.idea.titleAccent}</span>{t.idea.titleSuffix}
            </h2>
            <p className="text-xl leading-relaxed text-slate-300">
              {t.idea.subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryCta size="lg" />
              <SecondaryCta size="lg" onDark />
            </div>

            {/* What happens next — reduces the perceived risk of the ask */}
            <ul className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 text-sm text-slate-300 sm:flex-row sm:gap-8">
              {expectations.map((expectation) => (
                <li key={expectation.text} className="flex items-center gap-2">
                  <expectation.icon size={15} className="shrink-0 text-primary-400" aria-hidden="true" />
                  {expectation.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Idea
