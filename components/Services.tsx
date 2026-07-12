'use client'

import React, { useRef, useState } from 'react'
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

interface Capability {
  key: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  visual: React.ReactNode
}

/** Compact preview of the automation demo — the full interactive board lives in #automation. */
function AutomationMiniVisual() {
  const reduceMotion = useReducedMotion()
  const chain = [
    { icon: Zap, label: 'New Lead' },
    { icon: Bot, label: 'AI Qualification' },
    { icon: Users, label: 'CRM Update' },
  ]

  return (
    <div className="relative flex h-[440px] w-full max-w-[560px] flex-col justify-center overflow-hidden rounded-[2rem] border border-primary-400/20 bg-slate-950 p-6 shadow-2xl shadow-primary-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <p className="relative mb-8 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-300">
        Workflow preview
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
        Watch the full workflow run live below
      </a>
    </div>
  )
}

/** Minimal agent console mock for the AI capability tab. */
function AiAgentVisual() {
  const exchanges = [
    { from: 'system', text: 'New support ticket #4821 received' },
    { from: 'agent', text: 'Classified as billing · priority high. Suggested reply drafted.' },
    { from: 'system', text: 'Routed to finance team with full context' },
    { from: 'agent', text: 'Follow-up scheduled. Human approval requested for refund.' },
  ]

  return (
    <div className="relative flex h-[440px] w-full max-w-[560px] flex-col overflow-hidden rounded-[2rem] border border-accent-400/20 bg-slate-950 p-6 shadow-2xl shadow-primary-950/20 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="relative mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
          <Bot size={19} />
        </span>
        <div>
          <p className="text-sm font-bold text-white">Operations Agent</p>
          <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Working with human oversight
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
        <ShieldCheck size={13} className="text-primary-400" />
        Every agent ships with guardrails and human-in-the-loop controls.
      </p>
    </div>
  )
}

const capabilities: Capability[] = [
  {
    key: 'engineering',
    label: 'Engineering',
    icon: Smartphone,
    title: 'Digital Product Engineering',
    description:
      'We design and build high-performance web platforms, mobile applications, custom systems, and flexible headless CMS experiences.',
    features: [
      'Custom web applications',
      'iOS & Android development',
      'Headless CMS architecture',
      'Scalable backend systems',
      'Performance-focused delivery',
    ],
    visual: <ServiceVisual index={0} />,
  },
  {
    key: 'automation',
    label: 'Automation',
    icon: Workflow,
    title: 'Business Process Automation',
    description:
      'We turn repetitive work into reliable automated workflows with n8n and custom API integrations, so information moves between your tools without manual effort.',
    features: [
      'n8n workflow design & operation',
      'API integrations between your tools',
      'Automated reporting & alerts',
      'Fewer manual tasks, fewer errors',
      'Monitored, recoverable workflows',
    ],
    visual: <AutomationMiniVisual />,
  },
  {
    key: 'infrastructure',
    label: 'Infrastructure',
    icon: Cloud,
    title: 'Cloud, DevOps & Security',
    description:
      'We create secure, resilient infrastructure that keeps your systems available, deployable, and ready to scale under pressure.',
    features: [
      'Cloud infrastructure design',
      'Server management',
      'CI/CD pipelines',
      'Security best practices',
      'Scalable and stable environments',
    ],
    visual: <ServiceVisual index={1} />,
  },
  {
    key: 'design',
    label: 'Design',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'We study the complete user journey and design polished interfaces that make complex products clear, intuitive, and true to your brand.',
    features: [
      'User journey mapping',
      'Interface and interaction design',
      'Responsive product experiences',
      'Design systems',
      'Developer-ready handoff',
    ],
    visual: <ServiceVisual index={2} />,
  },
  {
    key: 'ai',
    label: 'AI',
    icon: Bot,
    title: 'AI Agents & Intelligent Systems',
    description:
      'We put AI to work inside your operations: agents that handle routine decisions, assistants that support your customers, and AI steps wired directly into your workflows — always with guardrails.',
    features: [
      'AI agents for routine operations',
      'Customer & support assistants',
      'Document and data extraction',
      'AI steps inside n8n workflows',
      'Human-in-the-loop controls',
    ],
    visual: <AiAgentVisual />,
  },
]

function Services() {
  const [activeKey, setActiveKey] = useState(capabilities[0].key)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = capabilities.find((capability) => capability.key === activeKey) ?? capabilities[0]

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = capabilities.length - 1
    let next: number | null = null
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setActiveKey(capabilities[next].key)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="services"
      className="w-full bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Expertise"
          title={
            <>
              End-to-End <Accent>Technical Capabilities</Accent>
            </>
          }
          description="From product strategy and experience design to engineering, automation, and infrastructure, one team takes your system from idea to reliable operation."
        />

        {/* Tab bar */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Technical capabilities"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
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
                  onClick={() => setActiveKey(capability.key)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 sm:px-5 ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="capability-tab-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-slate-100 shadow-sm ring-1 ring-primary-500/20 dark:bg-white/10"
                    />
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
