import { Blocks, Bot, ShieldCheck, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const advantages = [
  {
    title: 'One Team, End to End',
    description: 'Design, engineering, automation, and infrastructure stay connected from discovery through launch and operation.',
    icon: Blocks,
  },
  {
    title: 'Automation by Design',
    description: 'We look beyond the interface to remove repetitive work and build workflows that keep the business moving.',
    icon: Bot,
  },
  {
    title: 'Secure and Reliable',
    description: 'Performance, stability, and information security are engineering requirements—not afterthoughts.',
    icon: ShieldCheck,
  },
  {
    title: 'Ready to Scale',
    description: 'Flexible architecture and cloud foundations help your systems grow with your users, data, and operations.',
    icon: TrendingUp,
  },
]

function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary-50 to-transparent dark:via-primary-900/5" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Why Lames</h3>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">More than code. A complete operating system for your idea.</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">Traditional vendors hand over features. We connect the product, the workflows behind it, and the infrastructure that keeps it running.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-xl dark:border-white/5 dark:bg-slate-900/30 dark:hover:shadow-none"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
