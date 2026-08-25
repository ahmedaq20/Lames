'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Bot,
  CheckCircle2,
  Cloud,
  MessageSquareText,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import ServiceVisual from '@/components/ServiceVisuals'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'
import { Accent, SectionHeading } from '@/components/ui/SectionHeading'
import { useTranslation } from '@/locales/translations'

interface Capability {
  key: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  features: readonly string[]
  visual: React.ReactNode
}

const capabilityIcons: Record<string, LucideIcon> = {
  engineering: Smartphone,
  automation: Workflow,
  infrastructure: Cloud,
  design: Palette,
  ai: Bot,
}

/** Compact preview of the automation demo — the full interactive board lives in #automation. */
function AutomationMiniVisual() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const chain = [
    { icon: Zap, label: t.automation.nodes.lead },
    { icon: Bot, label: t.automation.nodes.ai },
    { icon: Users, label: t.automation.nodes.crm },
  ]

  return (
    <div className="relative flex h-[440px] w-full max-w-[560px] flex-col justify-center overflow-hidden rounded-[2rem] border border-primary-400/20 bg-slate-950 p-6 shadow-2xl shadow-primary-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <p className="relative mb-8 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-300">
        {t.services.workflowPreview}
      </p>

      <div className="relative flex items-center justify-between gap-2">
        {chain.map((node, index) => (
          <React.Fragment key={node.label}>
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-primary-300">
                <node.icon size={22} />
              </span>
              <span className="text-center text-[11px] font-semibold text-slate-300">{node.label}</span>
            </div>
            {index < chain.length - 1 && (
              <div className="relative mb-6 h-px flex-1 bg-primary-400/25">
                {!reduceMotion && (
                  <motion.span
                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.8 }}
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
                  />
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <a
        href="#automation"
        className="relative mt-10 inline-flex items-center gap-2 self-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-primary-400/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
      >
        <Sparkles size={15} className="text-primary-300" />
        {t.services.watchFullWorkflow}
      </a>
    </div>
  )
}

/** Minimal agent console mock for the AI capability tab. */
function AiAgentVisual() {
  const { t } = useTranslation()
  const exchanges = t.services.aiAgent.messages

  return (
    <div className="relative flex h-[440px] w-full max-w-[560px] flex-col overflow-hidden rounded-[2rem] border border-accent-400/20 bg-slate-950 p-6 shadow-2xl shadow-primary-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="relative mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
          <Bot size={19} />
        </span>
        <div>
          <p className="text-sm font-bold text-white">{t.services.aiAgent.title}</p>
          <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {t.services.aiAgent.status}
          </p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center gap-3">
        {exchanges.map((message, index) => (
          <motion.div
            key={message.text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            className={`flex max-w-[85%] items-start gap-2.5 rounded-2xl border px-4 py-3 text-xs leading-relaxed ${
              message.from === 'agent'
                ? 'self-end border-primary-400/25 bg-primary-500/10 text-slate-200'
                : 'self-start border-white/10 bg-white/[0.04] text-slate-400'
            }`}
          >
            {message.from === 'agent' ? (
              <Bot size={14} className="mt-0.5 shrink-0 text-primary-300" />
            ) : (
              <MessageSquareText size={14} className="mt-0.5 shrink-0 text-slate-500" />
            )}
            {message.text}
          </motion.div>
        ))}
      </div>

      <p className="relative mt-4 flex items-center gap-2 text-[11px] text-slate-500">
        <ShieldCheck size={13} className="text-primary-400 shrink-0" />
        {t.services.aiAgent.disclaimer}
      </p>
    </div>
  )
}

const ROTATION_INTERVAL_MS = 5000

function Services() {
  const { t, isRtl } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [activeKey, setActiveKey] = useState('engineering')
  const [isPaused, setIsPaused] = useState(false)
  const [timerKey, setTimerKey] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const visualsMap: Record<string, React.ReactNode> = {
    engineering: <ServiceVisual index={0} />,
    automation: <AutomationMiniVisual />,
    infrastructure: <ServiceVisual index={1} />,
    design: <ServiceVisual index={2} />,
    ai: <AiAgentVisual />,
  }

  const capabilities: Capability[] = t.services.capabilities.map((c) => ({
    key: c.key,
    label: c.label,
    icon: capabilityIcons[c.key] || Smartphone,
    title: c.title,
    description: c.description,
    features: c.features,
    visual: visualsMap[c.key],
  }))

  const active = capabilities.find((capability) => capability.key === activeKey) ?? capabilities[0]

  const handleTabSelect = useCallback((key: string) => {
    setActiveKey(key)
    setTimerKey((k) => k + 1)
  }, [])

  // Auto-advance tabs every 5 seconds (paused on hover / focus, disabled if reduced motion preferred)
  useEffect(() => {
    if (isPaused || reduceMotion) return

    const timer = setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = capabilities.findIndex((c) => c.key === prevKey)
        const nextIndex = currentIndex === -1 || currentIndex === capabilities.length - 1 ? 0 : currentIndex + 1
        return capabilities[nextIndex].key
      })
      setTimerKey((k) => k + 1)
    }, ROTATION_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [isPaused, reduceMotion, capabilities, timerKey])

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = capabilities.length - 1
    let next: number | null = null
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    handleTabSelect(capabilities[next].key)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setTimerKey((k) => k + 1)
      }}
      onFocus={() => setIsPaused(true)}
      onBlur={() => {
        setIsPaused(false)
        setTimerKey((k) => k + 1)
      }}
      className="relative w-full overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12 md:py-32"
    >
      {/* Arabian Mashrabiya Geometric Backdrop for Arabic mode */}
      {isRtl && (
        <>
          <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-45 transition-opacity duration-700">
            <Image
              src="/images/arabic-services-mashrabiya.jpg"
              alt="Arabian Geometric Mashrabiya Lattice"
              fill
              sizes="100vw"
              className="object-cover object-center contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 via-transparent to-slate-50/60 dark:from-slate-950/60 dark:via-transparent dark:to-slate-950/60" />
          </div>
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-amber-500/15 blur-[130px]" />
          <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-primary-600/15 blur-[140px]" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={
            <>
              {t.services.titleMain} <Accent>{t.services.titleAccent}</Accent>
            </>
          }
          description={t.services.description}
        />

        {/* Tab bar */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4">
          <div
            role="tablist"
            aria-label="Technical capabilities"
            className="flex flex-wrap items-center justify-center gap-1 rounded-3xl border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:rounded-full"
          >
            {capabilities.map((capability, index) => {
              const isActive = capability.key === activeKey
              return (
                <button
                  key={capability.key}
                  ref={(el) => { tabRefs.current[index] = el }}
                  type="button"
                  role="tab"
                  id={`capability-tab-${capability.key}`}
                  aria-selected={isActive}
                  aria-controls={`capability-panel-${capability.key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabSelect(capability.key)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 sm:px-5 ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="capability-tab-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 overflow-hidden rounded-full bg-slate-100 shadow-sm ring-1 ring-primary-500/20 dark:bg-white/10"
                    >
                      {/* 5-second progress indicator bar */}
                      {!reduceMotion && (
                        <span
                          key={`progress-${activeKey}-${timerKey}`}
                          className={`absolute bottom-0 inset-x-0 h-[2.5px] rounded-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400 animate-tab-progress transition-opacity duration-300 ${
                            isRtl ? 'origin-right' : 'origin-left'
                          } ${isPaused ? 'opacity-40' : 'opacity-100'}`}
                          style={{
                            animationPlayState: isPaused ? 'paused' : 'running',
                          }}
                        />
                      )}
                    </motion.span>
                  )}
                  <capability.icon size={16} className="relative z-10" aria-hidden="true" />
                  <span className="relative z-10">{capability.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Panel — stable layout, only content swaps */}
        <div className="mt-14 lg:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              role="tabpanel"
              id={`capability-panel-${active.key}`}
              aria-labelledby={`capability-tab-${active.key}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                  {active.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {active.description}
                </p>
                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {active.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                      <span className="text-sm font-medium md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <PrimaryCta />
                  <SecondaryCta />
                </div>
              </div>

              <div className="flex w-full items-center justify-center">{active.visual}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Services
