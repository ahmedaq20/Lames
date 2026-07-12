'use client'

import { motion } from 'framer-motion'

/**
 * Standard section header: eyebrow label + solid-color headline + description.
 * Gradient text is reserved for the hero H1 only — accent words inside section
 * headlines use <Accent> (solid primary color) instead.
 */

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-primary-600 dark:text-primary-400">{children}</span>
}

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${alignment} ${className}`}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">
        {eyebrow}
      </p>
      <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
