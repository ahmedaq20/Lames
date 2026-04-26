import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const faqs: FaqItem[] = [
  {
    question: "How do you handle the design process?",
    answer: "We follow a comprehensive 4-step process: Discovery, Strategic Planning, Design, and Development. We ensure your involvement in every stage to guarantee the final product aligns perfectly with your vision."
  },
  {
    question: "How long does a project typically take?",
    answer: "The duration varies depending on the project scope. A simple branding project may take 2 to 4 weeks, while a full website redesign might require 8 to 12 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Of course. We offer different maintenance packages to ensure your digital product remains secure, updated, and performs optimally after launch."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have worked in FinTech, healthcare, e-commerce, and Software as a Service (SaaS). Our flexibility allows us to tackle challenges in most industries."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Help Center</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 italic tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Everything you need to know about working with us.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-500 overflow-hidden ${openIndex === index
                ? 'bg-white dark:bg-slate-900 border-primary-500/50 shadow-xl dark:shadow-none'
                : 'bg-transparent border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:scale-110'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
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
};

export default FAQ;