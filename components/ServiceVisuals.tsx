'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Braces,
  CalendarDays,
  Check,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers3,
  Mail,
  MessageSquare,
  MousePointer2,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react'

function ProductEngineeringVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative h-[390px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-slate-950 p-5 shadow-2xl shadow-blue-950/20 sm:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl"
      >
        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 h-4 w-32 rounded-full bg-white/5" />
        </div>
        <div className="grid h-[220px] grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 border-r border-white/10 p-5 font-mono text-[10px] text-slate-400 sm:text-xs">
            <div className="flex items-center gap-2 text-blue-300"><Braces size={14} /> product.config</div>
            <div className="h-2 w-4/5 rounded bg-blue-400/25" />
            <div className="h-2 w-3/5 rounded bg-violet-400/20" />
            <div className="h-2 w-11/12 rounded bg-cyan-400/20" />
            <div className="h-2 w-2/3 rounded bg-blue-400/25" />
            <div className="flex gap-2 pt-2">
              <span className="rounded-md border border-blue-400/20 bg-blue-400/10 px-2 py-1 text-blue-200">API</span>
              <span className="rounded-md border border-violet-400/20 bg-violet-400/10 px-2 py-1 text-violet-200">CMS</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5">
            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="h-3 w-20 rounded bg-white/20" />
                <span className="h-6 w-14 rounded-full bg-blue-500" />
              </div>
              <div className="mb-3 h-16 rounded-lg bg-gradient-to-r from-blue-500/30 to-violet-500/30" />
              <div className="grid grid-cols-3 gap-2">
                <span className="h-9 rounded-md bg-white/10" />
                <span className="h-9 rounded-md bg-white/10" />
                <span className="h-9 rounded-md bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="absolute bottom-5 right-6 h-36 w-20 rounded-[1.4rem] border-4 border-slate-800 bg-slate-100 p-2 shadow-2xl sm:right-10"
      >
        <div className="mx-auto mb-3 h-1 w-6 rounded-full bg-slate-300" />
        <div className="h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500" />
        <div className="mt-2 space-y-1.5"><div className="h-1.5 rounded bg-slate-300" /><div className="h-1.5 w-2/3 rounded bg-slate-200" /></div>
      </motion.div>

      <div className="absolute bottom-5 left-7 flex gap-2 text-slate-300">
        {[Code2, Database, Smartphone].map((Icon, index) => (
          <span key={index} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90"><Icon size={16} /></span>
        ))}
      </div>
    </div>
  )
}

function AutomationVisual() {
  const reduceMotion = useReducedMotion()
  const nodes = [
    { icon: Mail, label: 'Inbox', position: 'left-5 top-10 sm:left-9' },
    { icon: CalendarDays, label: 'Schedule', position: 'right-5 top-10 sm:right-9' },
    { icon: MessageSquare, label: 'Support', position: 'bottom-9 left-5 sm:left-9' },
    { icon: FileSpreadsheet, label: 'Records', position: 'bottom-9 right-5 sm:right-9' },
  ]

  return (
    <div className="relative h-[390px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-50 via-white to-fuchsia-50 p-6 shadow-2xl shadow-orange-200/30 dark:border-orange-400/15 dark:from-slate-950 dark:via-[#1b1020] dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.14),transparent_52%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 390" aria-hidden="true">
        <motion.path d="M110 83 C190 83 190 195 280 195" fill="none" stroke="rgba(249,115,22,.38)" strokeWidth="2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .7 }} />
        <motion.path d="M450 83 C370 83 370 195 280 195" fill="none" stroke="rgba(168,85,247,.35)" strokeWidth="2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .1 }} />
        <motion.path d="M110 307 C190 307 190 195 280 195" fill="none" stroke="rgba(236,72,153,.32)" strokeWidth="2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .2 }} />
        <motion.path d="M450 307 C370 307 370 195 280 195" fill="none" stroke="rgba(249,115,22,.35)" strokeWidth="2" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .3 }} />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={reduceMotion ? false : { opacity: 0, scale: .85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .4, delay: index * .1 }}
          className={`absolute ${node.position} z-10 w-24 rounded-2xl border border-slate-200 bg-white/90 p-3 text-center shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/90`}
        >
          <node.icon className="mx-auto mb-2 text-slate-700 dark:text-slate-200" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{node.label}</span>
        </motion.div>
      ))}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: .7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 160, damping: 16, delay: .25 }}
        className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-orange-300/50 bg-white shadow-2xl shadow-orange-300/30 dark:border-orange-400/25 dark:bg-slate-900"
      >
        <Image src="/services/n8n-color.svg" alt="n8n workflow automation" width={76} height={76} />
        <span className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-orange-600">Orchestrate</span>
      </motion.div>

      {!reduceMotion && (
        <motion.span
          animate={{ x: [0, 150, 0], y: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1 }}
          className="absolute left-[22%] top-[25%] z-20 h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,.8)]"
        />
      )}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-700 backdrop-blur dark:border-orange-400/20 dark:bg-slate-900/70 dark:text-orange-300">
        <Workflow size={13} /> Connected workflow
      </div>
    </div>
  )
}

function CloudDevOpsVisual() {
  const reduceMotion = useReducedMotion()
  const pipeline = [
    { label: 'Build', icon: Code2 },
    { label: 'Deploy', icon: GitBranch },
    { label: 'Scale', icon: Server },
  ]

  return (
    <div className="relative h-[390px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#071421] p-6 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute left-1/2 top-[-90px] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .55 }}
        className="relative mx-auto flex w-fit items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-cyan-100"
      >
        <Cloud size={28} /><span className="text-sm font-bold">Production Cloud</span><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
      </motion.div>

      <div className="relative mx-auto mt-10 flex max-w-md items-center justify-between">
        <div className="absolute left-10 right-10 top-6 h-px bg-cyan-300/20" />
        <motion.div initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .9, delay: .25 }} className="absolute left-10 right-10 top-6 h-px origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400" />
        {pipeline.map((step, index) => (
          <motion.div
            key={step.label}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .4, delay: .2 + index * .16 }}
            className="relative z-10 flex flex-col items-center gap-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-slate-900 text-cyan-200 shadow-lg"><step.icon size={20} /></span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{step.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-9 grid grid-cols-2 gap-3">
        {['API Cluster', 'Data Cluster'].map((label, index) => (
          <motion.div
            key={label}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: .65 + index * .1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-slate-200">{label}</span><span className="text-[9px] font-bold uppercase text-emerald-400">Healthy</span></div>
            <div className="flex gap-2">{[0, 1, 2].map((item) => <span key={item} className="h-8 flex-1 rounded-md border border-cyan-400/10 bg-cyan-400/10" />)}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .45, delay: .9 }}
        className="absolute bottom-4 right-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-300"
      >
        <ShieldCheck size={15} /> Protected
      </motion.div>
    </div>
  )
}

function UiUxVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative h-[390px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-fuchsia-200 bg-gradient-to-br from-white via-fuchsia-50 to-violet-100 p-5 shadow-2xl shadow-fuchsia-200/40 dark:border-fuchsia-400/15 dark:from-slate-950 dark:via-[#1c1024] dark:to-slate-950 sm:p-7">
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative mt-5 grid h-[275px] grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
          className="border-r border-dashed border-slate-300 p-4 dark:border-white/15"
        >
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"><Layers3 size={14} /> Wireframe</div>
          <div className="mb-4 h-9 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" />
          <div className="mb-3 h-16 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" />
          <div className="grid grid-cols-2 gap-2"><div className="h-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /><div className="h-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /></div>
          <div className="mt-3 h-7 w-2/3 rounded-full border-2 border-dashed border-slate-300 dark:border-white/15" />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6, delay: .18 }}
          className="bg-gradient-to-b from-white to-violet-50 p-4 dark:from-slate-900 dark:to-violet-950/20"
        >
          <div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-violet-500">Final UI</span><Sparkles size={14} className="text-fuchsia-500" /></div>
          <div className="mb-3 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 p-4 text-white shadow-lg shadow-fuchsia-300/30">
            <div className="mb-2 h-2 w-3/5 rounded bg-white/70" /><div className="h-1.5 w-4/5 rounded bg-white/30" /><div className="mt-5 h-7 w-20 rounded-full bg-white/90" />
          </div>
          <div className="grid grid-cols-2 gap-2"><div className="h-16 rounded-lg bg-violet-100 dark:bg-violet-400/10" /><div className="h-16 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-400/10" /></div>
          <div className="mt-3 flex gap-2"><span className="h-4 flex-1 rounded-full bg-slate-200 dark:bg-white/10" /><span className="h-4 w-8 rounded-full bg-violet-500" /></div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -24, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 170, damping: 15, delay: .5 }}
        className="absolute left-1/2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-600 shadow-xl dark:border-violet-400/20 dark:bg-slate-800 dark:text-violet-300"
      >
        <MousePointer2 size={18} />
      </motion.div>

      <div className="absolute bottom-5 left-7 flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
        <Palette size={15} className="text-fuchsia-500" />
        {['bg-violet-500', 'bg-fuchsia-500', 'bg-amber-400', 'bg-slate-900'].map((color) => <span key={color} className={`h-3 w-3 rounded-full ${color}`} />)}
      </div>
      <div className="absolute bottom-5 right-7 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"><Check size={14} className="text-emerald-500" /> Developer ready</div>
    </div>
  )
}

export default function ServiceVisual({ index }: { index: number }) {
  if (index === 0) return <ProductEngineeringVisual />
  if (index === 1) return <AutomationVisual />
  if (index === 2) return <CloudDevOpsVisual />
  return <UiUxVisual />
}
