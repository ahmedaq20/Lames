'use client'

import { Blocks, Bot, ShieldCheck, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const advantages = [
  {
    number: '01',
    title: 'Design That Attracts',
    description: 'Interfaces crafted around the real user journey, polished enough to carry the weight of your brand and win your customers over.',
    icon: Blocks,
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    number: '02',
    title: 'Engineering That Endures',
    description: 'Strong, secure code and stable architectures that keep your business running — performance and security are requirements, not afterthoughts.',
    icon: ShieldCheck,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    number: '03',
    title: 'Automation That Works for You',
    description: 'Intelligent workflows quietly run your routine operations, freeing hundreds of hours so your team can focus on what actually grows the business.',
    icon: Bot,
    gradient: 'from-orange-500 to-fuchsia-500',
  },
  {
    number: '04',
    title: 'Infrastructure Ready to Scale',
    description: 'Cloud foundations and flexible architecture built to grow with your users, your data, and the ambitions of your business.',
    icon: TrendingUp,
    gradient: 'from-fuchsia-500 to-violet-500',
  },
]

// TODO: replace these with real, verifiable figures once available (or client logos/quotes).
const proofStats = [
  { value: 'End-to-end', label: 'Design, build, automation & cloud under one team' },
  { value: '100%', label: 'Custom-built systems — no templates, no lock-in' },
  { value: '24/7', label: 'Monitored, secure infrastructure that stays up' },
  { value: '5 disciplines', label: 'UI/UX · Frontend · Backend · Mobile · DevOps' },
]

function WhyLames() {
  return (
    <section id="why-lames" className="relative w-full overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#05070d] md:px-12 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary-50 to-transparent dark:via-primary-900/5" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Why Lames</h3>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
            We don&apos;t hand over code. <br className="hidden md:block" />
            We hand over a <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">complete system</span>.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Traditional vendors deliver features. We connect the product, the workflows behind it, and the infrastructure that keeps it running.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 dark:border-white/5 dark:bg-white/5 lg:grid-cols-4"
        >
          {proofStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 transition-colors dark:bg-[#05070d] md:p-8">
              <dt className="font-display text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">{stat.value}</span>
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
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 dark:border-white/5 dark:bg-slate-900/40 md:p-10"
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]`} />
              <span className="text-stroke pointer-events-none absolute -bottom-4 right-6 font-display text-8xl font-bold leading-none md:text-9xl">
                {item.number}
              </span>

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
