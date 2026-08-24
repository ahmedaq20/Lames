'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Check,
  Database,
  FileSpreadsheet,
  Mail,
  MessageCircle,
  Hexagon,
  Plug,
  Slack,
  Sparkles,
  Table2,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { PrimaryCta, SecondaryCta } from '@/components/ui/Button'
import { Accent } from '@/components/ui/SectionHeading'
import { useTranslation } from '@/locales/translations'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
}

const featureIcons: Record<string, LucideIcon> = {
  crm: Workflow,
  notify: Plug,
  ai: Bot,
  email: BarChart3,
}

const partners = [
  { icon: FileSpreadsheet, name: 'Google Sheets' },
  { icon: Slack, name: 'Slack' },
  { icon: Hexagon, name: 'HubSpot' },
  { icon: Mail, name: 'Gmail' },
  { icon: Table2, name: 'Airtable' },
  { icon: MessageCircle, name: 'WhatsApp' },
]

// Edge k carries the pulse while node with step k is running.
const flowEdges = [
  { d: 'M52 102 L190 102', step: 1 },
  { d: 'M190 102 L328 102', step: 2 },
  { d: 'M328 102 L465 102', step: 3 },
  { d: 'M465 102 C500 102 500 252 465 252 L328 252', step: 4 },
  { d: 'M328 252 L190 252', step: 5 },
]

// 700ms ticks: 0–5 run the nodes, 6–8 hold success, 9 resets to queued.
const TICK_MS = 700
const CYCLE_LENGTH = 10
const SUCCESS_HOLD_END = 8

type NodeState = 'queued' | 'running' | 'success'

function WorkflowPanel({ highlightedNode }: { highlightedNode: string | null }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [tick, setTick] = useState(-1)
  const [runs, setRuns] = useState(0)

  const flowNodes = [
    { key: 'lead', label: t.automation.nodes.lead, icon: Zap, step: 0, left: 10, top: 30, chip: 'from-slate-500 to-slate-600' },
    { key: 'ai', label: t.automation.nodes.ai, icon: Bot, step: 1, left: 36.5, top: 30, chip: 'from-primary-500 to-accent-500' },
    { key: 'crm', label: t.automation.nodes.crm, icon: Users, step: 2, left: 63, top: 30, chip: 'from-primary-500 to-primary-600' },
    { key: 'notify', label: t.automation.nodes.notify, icon: Bell, step: 3, left: 89.5, top: 30, chip: 'from-accent-500 to-accent-600' },
    { key: 'email', label: t.automation.nodes.email, icon: Mail, step: 4, left: 63, top: 74, chip: 'from-primary-400 to-primary-600' },
    { key: 'db', label: t.automation.nodes.db, icon: Database, step: 5, left: 36.5, top: 74, chip: 'from-accent-500 to-primary-600' },
  ]

  const logMessages = t.automation.logMessages

  useEffect(() => {
    if (reduceMotion) return
    let t = -1
    const interval = window.setInterval(() => {
      t = (t + 1) % CYCLE_LENGTH
      setTick(t)
      if (t === 6) setRuns((r) => r + 1)
    }, TICK_MS)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  const inSuccessHold = tick > 5 && tick <= SUCCESS_HOLD_END
  const nodeState = (step: number): NodeState => {
    if (reduceMotion) return 'success'
    if (tick === step) return 'running'
    if ((tick > step && tick <= SUCCESS_HOLD_END)) return 'success'
    return 'queued'
  }

  // The two most recent log lines for the ticker.
  const logIndex = reduceMotion ? 6 : Math.min(tick, 6)
  const visibleLog = tick < 0 && !reduceMotion
    ? []
    : logMessages.slice(Math.max(0, logIndex - 1), logIndex + 1)

  return (
    <div className="relative">
      {/* Ambient glow behind the panel */}
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.5),rgba(168,85,247,0.25)_55%,transparent_75%)] opacity-25 blur-2xl"
      />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        role="img"
        aria-label="Live demo of an automated workflow"
        className="relative mx-auto w-full max-w-[642px] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0b101d] p-4 shadow-2xl shadow-primary-950/40 sm:rounded-[1.75rem] sm:p-5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Panel header */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:px-3.5 sm:py-2.5">
            <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[9px]">{t.automation.status}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-bold text-white sm:text-xs">
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              {t.automation.running}
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:gap-2 sm:px-3.5 sm:py-2.5">
            <Activity size={13} className="text-primary-300 sm:size-[14px]" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-bold tabular-nums text-white sm:text-xs">{reduceMotion ? t.automation.liveDemo : runs}</p>
              <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                {reduceMotion ? t.automation.status : t.automation.runsThisSession}
              </p>
            </div>
          </div>
        </div>

        {/* Node canvas */}
        <div className="relative z-10 h-[240px] sm:h-[320px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 340" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <filter id="flow-dot-blur" x="-150%" y="-150%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            {flowEdges.map((edge) => {
              const lit = !reduceMotion && ((tick >= edge.step && tick <= SUCCESS_HOLD_END) || inSuccessHold)
              const pulsing = !reduceMotion && tick === edge.step
              return (
                <g key={edge.d}>
                  <path
                    d={edge.d}
                    fill="none"
                    stroke={lit ? 'rgba(96,165,250,0.7)' : 'rgba(96,165,250,0.2)'}
                    strokeWidth="1.5"
                    strokeDasharray={lit ? 'none' : '4 4'}
                    className="transition-[stroke] duration-300"
                  />
                  {pulsing && (
                    // Remounts each tick so the pulse travels exactly once per step.
                    <g key={`pulse-${tick}`}>
                      <circle r="4" cx="-10" cy="-10" fill="#60A5FA" filter="url(#flow-dot-blur)">
                        <animateMotion dur={`${TICK_MS / 1000}s`} repeatCount="1" fill="freeze" path={edge.d} />
                      </circle>
                      <circle r="1.75" cx="-10" cy="-10" fill="#dbeafe">
                        <animateMotion dur={`${TICK_MS / 1000}s`} repeatCount="1" fill="freeze" path={edge.d} />
                      </circle>
                    </g>
                  )}
                </g>
              )
            })}
          </svg>

          {flowNodes.map((node) => {
            const state = nodeState(node.step)
            const highlighted = highlightedNode === node.key
            return (
              <div key={node.key} className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.left}%`, top: `${node.top}%` }}>
                <motion.div
                  animate={reduceMotion ? undefined : { scale: state === 'running' || highlighted ? 1.07 : 1 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className={`relative flex w-[58px] flex-col items-center gap-1 rounded-xl border p-1.5 transition-[border-color,box-shadow,opacity] duration-300 min-[380px]:w-[64px] sm:w-[80px] sm:gap-1.5 sm:p-2 ${highlighted
                    ? 'border-primary-300 bg-white/[0.09] shadow-[0_0_28px_rgba(96,165,250,0.5)]'
                    : state === 'running'
                      ? 'border-primary-400/70 bg-white/[0.07] shadow-[0_0_24px_rgba(96,165,250,0.4)]'
                      : state === 'success'
                        ? 'border-white/15 bg-white/[0.05] shadow-[0_0_12px_rgba(96,165,250,0.1)]'
                        : 'border-white/10 bg-white/[0.03] opacity-70'
                    }`}
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br text-white transition-opacity duration-300 sm:h-9 sm:w-9 ${node.chip} ${state === 'queued' ? 'opacity-60' : ''}`}>
                    <node.icon size={14} className="sm:size-4" aria-hidden="true" />
                  </span>
                  <span className="text-center text-[7px] font-semibold leading-tight text-slate-300 sm:text-[9px]">{node.label}</span>

                  {/* Running spinner ring */}
                  {state === 'running' && !reduceMotion && (
                    <motion.span
                      aria-hidden
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="absolute -right-1.5 -top-1.5 h-[18px] w-[18px] rounded-full border-2 border-primary-400/30 border-t-primary-300"
                    />
                  )}

                  <AnimatePresence>
                    {state === 'success' && (
                      <motion.span
                        initial={reduceMotion ? false : { scale: 0 }}
                        animate={{ scale: reduceMotion ? 1 : [0, 1.25, 1] }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: easeOutExpo }}
                        className="absolute -right-1.5 -top-1.5 flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
                        style={{ height: 18, width: 18 }}
                      >
                        <Check size={10} strokeWidth={3.5} aria-hidden="true" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Execution log */}
        <div className="relative z-10 flex min-h-[62px] flex-col justify-center gap-1 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 font-mono sm:px-4">
          <p className="flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[9px]">
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            {t.automation.logTitle}
          </p>
          <div aria-live="polite" className="space-y-0.5">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleLog.map((line) => (
                <motion.p
                  key={line}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className={`truncate text-[10px] sm:text-[11px] ${line.startsWith('✓') ? 'text-emerald-400' : 'text-slate-300'}`}
                >
                  {line}
                </motion.p>
              ))}
            </AnimatePresence>
            {visibleLog.length === 0 && <p className="text-[10px] text-slate-500 sm:text-[11px]">{t.automation.waitingTrigger}</p>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function AutomationShowcase() {
  const { t, isRtl } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [highlightedNode, setHighlightedNode] = useState<string | null>(null)

  const features = t.automation.features.map((f) => ({
    icon: featureIcons[f.key] || Workflow,
    title: f.title,
    desc: f.desc,
    node: f.key,
  }))

  return (
    <section
      id="automation"
      className="relative w-full overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12 md:py-32"
    >
      {/* Cyber Palm Oasis Backdrop for Arabic mode */}
      {isRtl && (
        <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-50 transition-opacity duration-700">
          <Image
            src="/images/arabic-automation-palms.jpg"
            alt="Cyber Palm Oasis"
            fill
            sizes="100vw"
            className="object-cover object-center contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-white dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 dark:from-slate-950/60 dark:via-transparent dark:to-slate-950/60" />
        </div>
      )}

      <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[560px] rounded-full bg-primary-400/10 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
      >
        {/* Left column */}
        <div>
          {/* <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-600 shadow-sm dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
            <Sparkles size={12} aria-hidden="true" /> {t.automation.badge}
          </motion.div> */}

          <motion.h2 variants={item} className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t.automation.titleMain} <Accent>{t.automation.titleAccent}</Accent>
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {t.automation.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: easeOutExpo }}
                onMouseEnter={() => setHighlightedNode(feature.node)}
                onMouseLeave={() => setHighlightedNode(null)}
                onFocus={() => setHighlightedNode(feature.node)}
                onBlur={() => setHighlightedNode(null)}
                tabIndex={0}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow duration-[250ms] hover:shadow-xl hover:shadow-primary-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-primary-950/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-transform duration-[250ms] group-hover:rotate-6 dark:bg-primary-500/15 dark:text-primary-300">
                  <feature.icon size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">{feature.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">{feature.desc}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </motion.div>
        </div>

        {/* Right column: workflow dashboard */}
        <motion.div variants={item}>
          <WorkflowPanel highlightedNode={highlightedNode} />
        </motion.div>
      </motion.div>

      {/* Integration logos (tools we connect — not client logos) */}
      <motion.div
        initial={reduceMotion ? undefined : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="relative z-10 mx-auto mt-24 max-w-6xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-slate-200/70 bg-white px-6 py-5 dark:border-white/10 dark:bg-white/[0.03] sm:justify-between sm:gap-x-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{t.automation.connectTools}</p>
          {partners.map((partner) => (
            <motion.span
              key={partner.name}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } } }}
              className="flex cursor-default items-center gap-2 text-slate-500 transition-colors duration-300 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <partner.icon size={16} aria-hidden="true" />
              <span className="text-xs font-semibold">{partner.name}</span>
            </motion.span>
          ))}
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">+ More</span>
        </div>
      </motion.div>
    </section>
  )
}
