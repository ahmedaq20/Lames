'use client'

import { motion } from 'framer-motion'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'
import { useTranslation } from '@/locales/translations'

/**
 * Slim mid-page conversion band. Placed between long content sections so a
 * conversion opportunity appears every 2–3 viewports without a full section.
 */
function CTASection() {
  const { t } = useTranslation()

  return (
    <section aria-label="Get in touch" className="w-full bg-white px-6 py-14 transition-colors duration-300 dark:bg-slate-950 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-8 dark:border-white/10 dark:bg-white/[0.03] md:flex-row md:px-12"
      >
        <div className="text-center md:text-left rtl:md:text-right">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
            {t.ctaSection.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {t.ctaSection.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
          <PrimaryCta />
          <SecondaryCta />
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
