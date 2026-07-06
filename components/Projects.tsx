import { ArrowUpLeft } from 'lucide-react';
import { Project } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    title: "Connected Operations Platform",
    category: "Product Engineering Concept",
    image: "https://images.unsplash.com/photo-1616077168712-fc6c788cd4ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "An illustrative concept for unifying workflows, teams, and operational data in one secure system."
  },
  {
    title: "Automation Control Center",
    category: "Automation Concept",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "A concept interface for monitoring automated workflows, integrations, exceptions, and business activity."
  },
  {
    title: "Scalable Customer Portal",
    category: "Digital Product Concept",
    image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "An illustrative customer experience designed around clarity, performance, and cloud-ready growth."
  }
];

function Projects() {
  return (
    <section id="portfolio" className="w-full bg-white dark:bg-slate-950 py-24 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Concept Portfolio</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Systems, Not Just Screens</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Explore concept directions that demonstrate how product design, engineering, automation, and infrastructure come together.
          </p>
        </motion.div>
        <Link href='/portfolio' className="px-8 py-4 rounded-full border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all font-bold">
          Explore Concepts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link href='/portfolio/projectdetail'>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg dark:shadow-none bg-slate-100 dark:bg-slate-900">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/10 transition-colors"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex justify-between items-start shadow-2xl">
                    <div>
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.2em] mb-1 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:-rotate-45 transition-transform duration-500">
                      <ArrowUpLeft className="text-black" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
