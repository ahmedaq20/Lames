import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import { motion } from 'framer-motion';

const testimonials: Testimonial[] = [
  {
    name: "Alex Morgan",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Working with this agency was a real turning point. They completely redefined our brand identity and helped us double our conversion rates in just three months.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Founder, ArtSpace",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "The level of creativity and attention to detail is unmatched. They didn't just deliver a website; they presented a masterpiece that truly represents us.",
    rating: 5
  },
  {
    name: "Michael Ross",
    role: "Director, FutureCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Professional, punctual, and incredibly talented. The team went above and beyond to ensure not only that our expectations were met, but exceeded.",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Bg Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-primary-50 dark:via-primary-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 italic tracking-tight">Customer Stories</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Don&apos;t just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-slate-900/30 p-10 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-none backdrop-blur-sm"
            >
              <Quote className="absolute top-8 left-8 text-slate-200 dark:text-white/5 group-hover:text-primary-500/20 transition-colors duration-500" size={64} />

              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary-500"
                  ></motion.div>
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-10 relative z-10 italic">
                &quot;{item.text}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity rounded-full"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm font-semibold tracking-wide text-primary-600 dark:text-primary-400 uppercase">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;