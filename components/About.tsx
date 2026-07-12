'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Workflow, Cloud, Palette, ShieldCheck } from 'lucide-react';
import { PrimaryCta } from '@/components/ui/Button';
import { Accent } from '@/components/ui/SectionHeading';

const capabilities = [
  {
    title: 'Product Engineering',
    description: 'Web, mobile, and custom systems built to production standards.',
    icon: Code2,
  },
  {
    title: 'Business Automation',
    description: 'n8n workflows and integrations that remove repetitive work.',
    icon: Workflow,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Secure infrastructure, CI/CD, and zero-drama deployments.',
    icon: Cloud,
  },
  {
    title: 'UI/UX Design',
    description: 'Journey-mapped interfaces that carry the weight of your brand.',
    icon: Palette,
  },
];

// Verifiable facts only. TODO(trust): swap in real delivery metrics (projects
// shipped, hours automated, client count) once they can be backed up.
const facts = [
  { value: '5', label: 'Disciplines: UI/UX, frontend, backend, mobile & DevOps' },
  { value: 'EN · AR', label: 'We work with clients in English and Arabic' },
  { value: 'One team', label: 'Strategy to operations — no handoffs' },
];

function About() {
  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-12 relative bg-white dark:bg-slate-900/30 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-600/5 blur-[120px] dark:bg-primary-600/10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative order-2 md:order-1 w-full"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary-600/30 via-transparent to-accent-500/30 blur-2xl" />

          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10">
            <Image
              src="/images/about-team.jpg"
              alt="Lames engineering team working together"
              width={1200}
              height={800}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            {/* Caption inside the image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">One Integrated Team</p>
              <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-white/90">
                Strategy, design, engineering, automation, and operations — working as one.
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-6 -right-4 md:-right-8 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 pr-5 shadow-xl dark:border-white/10 dark:bg-slate-950"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Security-first delivery</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Built for performance & flexibility</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-10 order-1 md:order-2"
        >
          <div>
            <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Who We Are</h3>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              We are more than just <br />
              <Accent>a Development Vendor</Accent>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Lames is an integrated digital agency specializing in product engineering and business automation.
              We don&apos;t hand you code and walk away — we deliver a complete system: an experience that attracts
              customers, engineering that keeps it stable, automation that runs your routine operations, and
              infrastructure ready to grow with you.
            </p>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                className="group flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors duration-300 hover:border-primary-500/30 hover:bg-white dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white dark:text-primary-400">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Facts */}
          <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-white/10">
            {facts.map((fact) => (
              <div key={fact.value}>
                <p className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400 md:text-3xl">{fact.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{fact.label}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PrimaryCta />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
