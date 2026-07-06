'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Cloud, Palette, Smartphone, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Service } from '@/types'
import ServiceVisual from '@/components/ServiceVisuals'

const services: Service[] = [
  {
    title: 'Digital Product Engineering',
    description: 'We design and build high-performance web platforms, mobile applications, custom systems, and flexible headless CMS experiences.',
    icon: Smartphone,
    color: 'from-blue-500 to-violet-500',
    features: ['Custom web applications', 'iOS & Android development', 'Headless CMS architecture', 'Scalable backend systems', 'Performance-focused delivery'],
    ctaText: 'Build Your Digital Product',
  },
  {
    title: 'Business Process Automation',
    description: 'We turn repetitive work into reliable automated workflows and connect your tools so information moves smoothly across the business.',
    icon: Zap,
    color: 'from-orange-500 to-fuchsia-500',
    features: ['n8n workflow automation', 'API and system integrations', 'Sales and marketing workflows', 'Customer service automation', 'Less manual work and fewer errors'],
    ctaText: 'Automate Your Operations',
  },
  {
    title: 'Cloud, DevOps & Security',
    description: 'We create secure, resilient infrastructure that keeps your systems available, deployable, and ready to scale under pressure.',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    features: ['Cloud infrastructure design', 'Server management', 'CI/CD pipelines', 'Security best practices', 'Scalable and stable environments'],
    ctaText: 'Strengthen Your Infrastructure',
  },
  {
    title: 'UI/UX Design',
    description: 'We study the complete user journey and design polished interfaces that make complex products clear, intuitive, and true to your brand.',
    icon: Palette,
    color: 'from-fuchsia-500 to-violet-500',
    features: ['User journey mapping', 'Interface and interaction design', 'Responsive product experiences', 'Design systems', 'Developer-ready handoff'],
    ctaText: 'Design a Better Experience',
  },
]

const sectionStyles = [
  'bg-white dark:bg-slate-900',
  'bg-orange-50/40 dark:bg-[#100d12]',
  'bg-cyan-50/40 dark:bg-[#07111a]',
  'bg-fuchsia-50/30 dark:bg-[#110c15]',
]

function Services() {
  return (
    <div id="services" className="w-full">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-slate-50 px-6 py-16 transition-colors duration-300 dark:bg-slate-950 md:px-12"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Our Expertise</h3>
          <h2 className="mb-6 text-4xl font-black italic tracking-tight text-slate-900 dark:text-white md:text-7xl">
            End-to-End <span className="text-primary-600">Technical Capabilities</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            From product strategy and experience design to engineering, automation, and infrastructure, one team takes your system from idea to reliable operation.
          </p>
        </div>
      </motion.section>

      {services.map((service, index) => {
        const isEven = index % 2 === 0

        return (
          <motion.section
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className={`relative w-full overflow-hidden px-6 py-16 transition-colors duration-500 md:px-12 md:py-24 ${sectionStyles[index]}`}
          >
            <div className={`pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${service.color} opacity-[0.07] blur-[120px]`} />
            <div className={`relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`h-1 w-20 bg-gradient-to-r ${service.color}`} />
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
                    <service.icon size={19} />
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">{service.title}</h4>
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">{service.description}</p>
                  {service.features && (
                    <ul className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" />
                          <span className="text-sm font-medium md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4">
                  <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:bg-white dark:text-slate-900">
                    <span>{service.ctaText}</span>
                    <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                  </Link>
                </div>
              </div>

              <div className="flex w-full flex-1 items-center justify-center">
                <ServiceVisual index={index} />
              </div>
            </div>
          </motion.section>
        )
      })}
    </div>
  )
}

export default Services
