'use client';

import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from '@/locales/translations';

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">{t.faq.eyebrow}</h3>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{t.faq.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">{t.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-500 overflow-hidden ${openIndex === index
                ? 'bg-white dark:bg-slate-900 border-primary-500/50 shadow-xl dark:shadow-none'
                : 'bg-transparent border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
            >
              <h3>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left rtl:text-right group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-inset rounded-2xl"
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <span aria-hidden="true" className={`p-2 rounded-full transition-all duration-300 shrink-0 ml-3 rtl:ml-0 rtl:mr-3 ${openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:scale-110'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
              </h3>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
