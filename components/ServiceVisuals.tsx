'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  Monitor,
  MousePointer2,
  Palette,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const productModes = [
  { key: 'web', label: 'Web', icon: Monitor, file: 'web.platform', metric: '99 Performance', gradient: 'from-blue-500 to-cyan-400' },
  { key: 'mobile', label: 'Mobile', icon: Smartphone, file: 'mobile.app', metric: 'iOS + Android', gradient: 'from-violet-500 to-fuchsia-400' },
  { key: 'api', label: 'API', icon: Database, file: 'api.service', metric: 'Secure & Scalable', gradient: 'from-emerald-500 to-cyan-400' },
] as const

function ProductEngineeringVisual() {
  const reduceMotion = useReducedMotion()
  const [activeMode, setActiveMode] = useState<(typeof productModes)[number]['key']>('web')
  const mode = productModes.find((item) => item.key === activeMode) ?? productModes[0]

  return (
    <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-slate-950 p-5 shadow-2xl shadow-blue-950/20 sm:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300">Try it</p>
          <p className="text-xs text-slate-400">Switch the product surface</p>
        </div>
        <div role="tablist" aria-label="Product engineering preview" className="flex rounded-xl border border-white/10 bg-white/5 p-1">
          {productModes.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={activeMode === item.key}
              onClick={() => setActiveMode(item.key)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[10px] font-bold transition-colors sm:px-3 ${activeMode === item.key ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <item.icon size={13} /> <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl"
      >
        <div className="flex h-9 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-3 h-3.5 w-28 rounded-full bg-white/5" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="grid h-[245px] grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-3 border-r border-white/10 p-4 font-mono text-[10px] text-slate-400 sm:p-5 sm:text-xs">
              <div className="flex items-center gap-2 text-blue-300"><Braces size={14} /> {mode.file}</div>
              <div className="h-2 w-4/5 rounded bg-blue-400/25" /><div className="h-2 w-3/5 rounded bg-violet-400/20" /><div className="h-2 w-11/12 rounded bg-cyan-400/20" /><div className="h-2 w-2/3 rounded bg-blue-400/25" />
              <div className="pt-2">
                <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-200">{mode.metric}</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-4">
              <div className={`transition-all duration-300 ${activeMode === 'mobile' ? 'w-24 rounded-[1.4rem] border-4 border-slate-700 bg-slate-100 p-2' : 'w-full rounded-xl border border-white/10 bg-white/5 p-4'}`}>
                {activeMode === 'mobile' && <div className="mx-auto mb-2 h-1 w-6 rounded bg-slate-300" />}
                <div className={`mb-3 h-16 rounded-lg bg-gradient-to-br ${mode.gradient}`} />
                <div className="mb-3 h-2 w-3/5 rounded bg-slate-400/30" />
                <div className="grid grid-cols-3 gap-2"><span className="h-9 rounded-md bg-white/10" /><span className="h-9 rounded-md bg-white/10" /><span className="h-9 rounded-md bg-white/10" /></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

type ProcessState = 'idle' | 'running' | 'completed'

function AutomationVisual() {
  const reduceMotion = useReducedMotion()
  const [processState, setProcessState] = useState<ProcessState>('idle')
  const [activeStep, setActiveStep] = useState(-1)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const nodes = [
    { icon: Mail, label: 'Inbox', position: 'left-4 top-11 sm:left-8' },
    { icon: CalendarDays, label: 'Schedule', position: 'right-4 top-11 sm:right-8' },
    { icon: MessageSquare, label: 'Support', position: 'bottom-16 left-4 sm:left-8' },
    { icon: FileSpreadsheet, label: 'Records', position: 'bottom-16 right-4 sm:right-8' },
  ]

  useEffect(() => {
    if (processState !== 'running') return
    if (activeStep >= nodes.length - 1) {
      const done = window.setTimeout(() => setProcessState('completed'), 450)
      return () => window.clearTimeout(done)
    }
    const next = window.setTimeout(() => setActiveStep((step) => step + 1), 520)
    return () => window.clearTimeout(next)
  }, [activeStep, nodes.length, processState])

  const runWorkflow = () => {
    setSelectedNode(null)
    if (reduceMotion) {
      setActiveStep(nodes.length - 1)
      setProcessState('completed')
      return
    }
    setActiveStep(0)
    setProcessState('running')
  }

  const pathData = [
    'M110 83 C190 83 190 195 280 195',
    'M450 83 C370 83 370 195 280 195',
    'M110 307 C190 307 190 195 280 195',
    'M450 307 C370 307 370 195 280 195',
  ]

  return (
    <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-50 via-white to-fuchsia-50 p-6 shadow-2xl shadow-orange-200/30 dark:border-orange-400/15 dark:from-slate-950 dark:via-[#1b1020] dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.14),transparent_52%)]" />
      <div className="absolute left-6 top-5 z-30"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-300">Interactive workflow</p><p className="text-xs text-slate-500">Select a node or run the flow</p></div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 390" aria-hidden="true">
        {pathData.map((path, index) => (
          <motion.path key={path} d={path} fill="none" strokeWidth="3" animate={{ stroke: activeStep >= index ? 'rgba(249,115,22,.9)' : 'rgba(148,163,184,.25)' }} transition={{ duration: .25 }} />
        ))}
      </svg>

      {nodes.map((node, index) => {
        const active = activeStep >= index || selectedNode === node.label
        return (
          <motion.button
            key={node.label}
            type="button"
            onClick={() => setSelectedNode(node.label)}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            className={`absolute ${node.position} z-10 w-24 rounded-2xl border p-3 text-center shadow-lg backdrop-blur transition-colors ${active ? 'border-orange-400 bg-orange-50 text-orange-700 dark:bg-orange-400/15 dark:text-orange-200' : 'border-slate-200 bg-white/90 text-slate-600 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-300'}`}
            aria-pressed={selectedNode === node.label}
          >
            <node.icon className="mx-auto mb-2" size={20} /><span className="text-[10px] font-bold uppercase tracking-wider">{node.label}</span>
          </motion.button>
        )
      })}

      <motion.div animate={{ scale: processState === 'running' && !reduceMotion ? [1, 1.04, 1] : 1 }} transition={{ repeat: processState === 'running' ? Infinity : 0, duration: 1 }} className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-orange-300/50 bg-white shadow-2xl shadow-orange-300/30 dark:border-orange-400/25 dark:bg-slate-900">
        <Image src="/services/n8n-color.svg" alt="n8n workflow automation" width={68} height={68} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">{processState === 'running' ? 'Processing' : processState === 'completed' ? 'Completed' : 'Ready'}</span>
      </motion.div>

      <button type="button" onClick={runWorkflow} disabled={processState === 'running'} className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-colors hover:bg-orange-500 disabled:cursor-wait disabled:opacity-70">
        {processState === 'completed' ? <Check size={15} /> : <Play size={14} fill="currentColor" />}
        {processState === 'running' ? `Running ${activeStep + 1}/${nodes.length}` : processState === 'completed' ? 'Run Again' : 'Run Workflow'}
      </button>
    </div>
  )
}

function CloudDevOpsVisual() {
  const reduceMotion = useReducedMotion()
  const [deployState, setDeployState] = useState<ProcessState>('idle')
  const [activeStage, setActiveStage] = useState(-1)
  const pipeline = [{ label: 'Build', icon: Code2 }, { label: 'Deploy', icon: GitBranch }, { label: 'Scale', icon: Server }]

  useEffect(() => {
    if (deployState !== 'running') return
    if (activeStage >= pipeline.length - 1) {
      const done = window.setTimeout(() => setDeployState('completed'), 550)
      return () => window.clearTimeout(done)
    }
    const next = window.setTimeout(() => setActiveStage((stage) => stage + 1), 650)
    return () => window.clearTimeout(next)
  }, [activeStage, deployState, pipeline.length])

  const deploy = () => {
    if (reduceMotion) {
      setActiveStage(pipeline.length - 1)
      setDeployState('completed')
      return
    }
    setActiveStage(0)
    setDeployState('running')
  }

  return (
    <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#071421] p-6 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-cyan-100"><Cloud size={24} /><span className="text-xs font-bold sm:text-sm">Production Cloud</span></div>
        <button type="button" onClick={deploy} disabled={deployState === 'running'} className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-xs font-black text-slate-950 transition-colors hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-70"><Rocket size={15} />{deployState === 'running' ? 'Deploying' : deployState === 'completed' ? 'Redeploy' : 'Deploy'}</button>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-md items-center justify-between">
        <div className="absolute left-10 right-10 top-6 h-px bg-cyan-300/20" />
        <motion.div animate={{ scaleX: activeStage < 0 ? 0 : (activeStage + 1) / pipeline.length }} className="absolute left-10 right-10 top-6 h-px origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400" />
        {pipeline.map((stage, index) => {
          const active = activeStage >= index
          return (
            <div key={stage.label} className="relative z-10 flex flex-col items-center gap-2">
              <motion.span animate={{ scale: activeStage === index && deployState === 'running' && !reduceMotion ? [1, 1.12, 1] : 1 }} transition={{ repeat: activeStage === index && deployState === 'running' ? Infinity : 0, duration: .8 }} className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-lg transition-colors ${active ? 'border-cyan-300 bg-cyan-400 text-slate-950' : 'border-cyan-300/20 bg-slate-900 text-cyan-200'}`}><stage.icon size={20} /></motion.span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-cyan-300' : 'text-slate-500'}`}>{stage.label}</span>
            </div>
          )
        })}
      </div>

      <div className="relative mt-9 grid grid-cols-2 gap-3">
        {['API Cluster', 'Data Cluster'].map((label) => (
          <div key={label} className={`rounded-xl border p-4 transition-colors ${deployState === 'completed' ? 'border-emerald-400/25 bg-emerald-400/5' : 'border-white/10 bg-white/5'}`}>
            <div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-slate-200">{label}</span><span className={`text-[9px] font-bold uppercase ${deployState === 'completed' ? 'text-emerald-400' : 'text-slate-500'}`}>{deployState === 'completed' ? 'Healthy' : 'Standby'}</span></div>
            <div className="flex gap-2">{[0, 1, 2].map((item) => <motion.span key={item} animate={{ opacity: deployState === 'completed' ? 1 : .35 }} className="h-8 flex-1 rounded-md border border-cyan-400/10 bg-cyan-400/10" />)}</div>
          </div>
        ))}
      </div>

      <div className={`absolute bottom-4 right-5 flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors ${deployState === 'completed' ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300' : 'border-white/10 bg-white/5 text-slate-500'}`}><ShieldCheck size={15} /> {deployState === 'completed' ? 'Protected' : 'Awaiting deploy'}</div>
    </div>
  )
}

const accents = [
  { name: 'Violet', dot: 'bg-violet-500', gradient: 'from-violet-600 to-fuchsia-500', soft: 'bg-violet-100 dark:bg-violet-400/10' },
  { name: 'Blue', dot: 'bg-blue-500', gradient: 'from-blue-600 to-cyan-400', soft: 'bg-blue-100 dark:bg-blue-400/10' },
  { name: 'Amber', dot: 'bg-amber-400', gradient: 'from-amber-500 to-orange-500', soft: 'bg-amber-100 dark:bg-amber-400/10' },
] as const

function WireframeMockup() {
  return <div className="h-full p-4"><div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400"><Layers3 size={13} /> Wireframe</div><div className="mb-3 h-8 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /><div className="mb-3 h-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /><div className="grid grid-cols-2 gap-2"><div className="h-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /><div className="h-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-white/15" /></div></div>
}

function FinalMockup({ accent }: { accent: (typeof accents)[number] }) {
  return <div className="h-full bg-gradient-to-b from-white to-slate-50 p-4 dark:from-slate-900 dark:to-slate-950"><div className="mb-3 flex items-center justify-between"><span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Final UI</span><Sparkles size={13} className="text-fuchsia-500" /></div><div className={`mb-3 rounded-xl bg-gradient-to-br p-4 text-white shadow-lg ${accent.gradient}`}><div className="mb-2 h-2 w-3/5 rounded bg-white/70" /><div className="h-1.5 w-4/5 rounded bg-white/30" /><div className="mt-5 h-7 w-20 rounded-full bg-white/90" /></div><div className="grid grid-cols-2 gap-2"><div className={`h-16 rounded-lg ${accent.soft}`} /><div className={`h-16 rounded-lg ${accent.soft}`} /></div></div>
}

function UiUxVisual() {
  const [reveal, setReveal] = useState(58)
  const [accentIndex, setAccentIndex] = useState(0)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const accent = accents[accentIndex]

  return (
    <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-fuchsia-200 bg-gradient-to-br from-white via-fuchsia-50 to-violet-100 p-5 shadow-2xl shadow-fuchsia-200/40 dark:border-fuchsia-400/15 dark:from-slate-950 dark:via-[#1c1024] dark:to-slate-950 sm:p-6">
      <div className="relative flex items-center justify-between gap-3">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-600 dark:text-fuchsia-300">Design playground</p><p className="text-xs text-slate-500">Compare and customize</p></div>
        <div className="flex rounded-xl border border-slate-200 bg-white/70 p-1 dark:border-white/10 dark:bg-slate-900/70">
          {([{ key: 'desktop', icon: Monitor }, { key: 'mobile', icon: Smartphone }] as const).map((item) => <button key={item.key} type="button" aria-label={`${item.key} preview`} aria-pressed={device === item.key} onClick={() => setDevice(item.key)} className={`rounded-lg p-2 transition-colors ${device === item.key ? 'bg-violet-600 text-white' : 'text-slate-500 hover:text-violet-600'}`}><item.icon size={15} /></button>)}
        </div>
      </div>

      <div className={`relative mx-auto mt-4 h-[255px] overflow-hidden border border-slate-200 bg-white shadow-xl transition-[width,border-radius] duration-300 dark:border-white/10 dark:bg-slate-900 ${device === 'mobile' ? 'w-[185px] rounded-[1.5rem] border-[5px] border-slate-800' : 'w-full rounded-2xl'}`}>
        <div className="absolute inset-0"><WireframeMockup /></div>
        <motion.div className="absolute inset-0 overflow-hidden" animate={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }} transition={{ duration: .08 }}><FinalMockup accent={accent} /></motion.div>
        <div className="pointer-events-none absolute bottom-0 top-0 w-px bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,.8)]" style={{ left: `${reveal}%` }}><span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg"><MousePointer2 size={13} /></span></div>
      </div>

      <label className="absolute bottom-[58px] left-6 right-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-500"><span>Wireframe</span><input type="range" min="10" max="90" value={reveal} onChange={(event) => setReveal(Number(event.target.value))} aria-label="Compare wireframe and final design" className="h-1 flex-1 cursor-ew-resize accent-violet-600" /><span>Final</span></label>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 backdrop-blur dark:border-white/10 dark:bg-slate-900/80"><Palette size={14} className="text-fuchsia-500" />{accents.map((item, index) => <button key={item.name} type="button" aria-label={`Use ${item.name} accent`} aria-pressed={accentIndex === index} onClick={() => setAccentIndex(index)} className={`h-4 w-4 rounded-full ${item.dot} ${accentIndex === index ? 'ring-2 ring-offset-2 ring-violet-400 dark:ring-offset-slate-900' : ''}`} />)}</div>
    </div>
  )
}

export default function ServiceVisual({ index }: { index: number }) {
  if (index === 0) return <ProductEngineeringVisual />
  if (index === 1) return <AutomationVisual />
  if (index === 2) return <CloudDevOpsVisual />
  return <UiUxVisual />
}
