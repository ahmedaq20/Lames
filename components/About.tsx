'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function About() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 relative bg-white dark:bg-slate-900/30 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-2xl transform rotate-3 blur-sm opacity-20 dark:opacity-50"></div>
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team meeting"
            className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-8 -right-8 z-20 bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-white/10 shadow-xl max-w-xs hidden md:block"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">One Integrated Team</p>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Strategy, design, engineering, automation, and operations—working as one.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8 order-1 md:order-2"
        >
          <div>
            <h3 className="text-primary-600 dark:text-primary-400 font-semibold mb-2 uppercase tracking-wider text-sm">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              We are more than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">a Development Vendor</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Lames is an integrated digital agency specializing in product engineering and business automation. Our UI/UX, frontend, backend, mobile, DevOps, and automation specialists deliver complete systems built for security, performance, and long-term flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Product Engineering",
              "Business Automation",
              "Cloud & DevOps",
              "UI/UX Design"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="text-primary-600 dark:text-primary-500 shrink-0" size={20} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="pt-4"
          >
            <Link href="/contact" className="inline-flex bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 font-bold py-3 px-8 rounded-full transition-colors shadow-lg dark:shadow-none">
              Talk to Our Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
