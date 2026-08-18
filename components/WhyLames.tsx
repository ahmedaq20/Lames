'use client'

import Image from 'next/image'
import { Blocks, Bot, ShieldCheck, TrendingUp, Sparkles, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Accent } from '@/components/ui/SectionHeading'
import { useTranslation } from '@/locales/translations'

const advantageConfig: { icon: LucideIcon; gradient: string }[] = [
  { icon: Blocks, gradient: 'from-primary-500 to-accent-500' },
  { icon: ShieldCheck, gradient: 'from-primary-400 to-primary-600' },
  { icon: Bot, gradient: 'from-accent-500 to-primary-500' },
  { icon: TrendingUp, gradient: 'from-accent-400 to-accent-600' },
]

function WhyLames() {
  const { t, isRtl } = useTranslation()

  const advantages = t.whyLames.advantages.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: advantageConfig[index]?.icon || Blocks,
    gradient: advantageConfig[index]?.gradient || 'from-primary-500 to-accent-500',
  }))

  return (
    <section id="why-lames" className="relative w-full overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#05070d] md:px-12 md:py-32">
      {/* Arabian Falcon Backdrop for Arabic mode */}
      {isRtl && (
        <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-50 transition-opacity duration-700">
          <Image
            src="/images/arabic-why-falcon.jpg"
            alt="Arabian Falcon Backdrop"
            fill
            sizes="100vw"
            className="object-cover object-right-top contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-white dark:from-[#05070d] dark:via-[#05070d]/60 dark:to-[#05070d]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 dark:from-[#05070d]/60 dark:via-transparent dark:to-[#05070d]/60" />
        </div>
      )}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary-50 to-transparent dark:via-primary-900/5" />
      {isRtl && (
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">{t.whyLames.eyebrow}</h3>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
            {t.whyLames.titleMain} <br className="hidden md:block" />
            <Accent>{t.whyLames.titleAccent}</Accent>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {isRtl ? 'الشركات التقليدية تقدم مزايا متفرقة، بينما نبني في لامِس أنظمة متكاملة متصلة بأعلى درجات الدقة والسرعة كالصقر العربي.' : 'Traditional vendors deliver features. We connect the product, the workflows behind it, and the infrastructure that keeps it running.'}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 dark:border-white/5 dark:bg-white/5 lg:grid-cols-4"
        >
          {t.whyLames.proofStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 transition-colors dark:bg-[#05070d] md:p-8">
              <dt className="font-display text-xl font-bold text-primary-600 dark:text-primary-400 md:text-2xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-white/5 dark:bg-slate-900/40 md:p-10"
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 rtl:-right-auto rtl:-left-16 h-48 w-48 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]`} />

              <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <item.icon size={26} />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="max-w-md leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyLames
