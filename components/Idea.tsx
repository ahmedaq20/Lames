'use client'

import { CalendarCheck, Clock3, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'

// TODO(content): confirm the response-time promise with the team before launch.
const expectations = [
  { icon: CalendarCheck, text: 'A 30-minute discovery call — no commitment' },
  { icon: Clock3, text: 'We reply within one business day' },
  { icon: FileText, text: 'A written summary with practical next steps' },
]

function Idea() {
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
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-600/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary-400">
              We don&apos;t just build apps — we build systems that work for you
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              Ready to build a system that <span className="text-primary-400">works for you</span>?
            </h2>
            <p className="text-xl leading-relaxed text-slate-300">
              Tell us where your business is losing time. We&apos;ll help you turn the bottleneck into a
              secure, scalable solution.
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

            {/*
              TODO(trust): once a real, named client testimonial exists, place it
              here — proof adjacent to the final ask is the highest-leverage spot.
            */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Idea
