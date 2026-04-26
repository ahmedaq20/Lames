import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { TeamMember } from '@/types';
import { motion } from 'framer-motion';

const team: TeamMember[] = [
  {
    name: "John Cooper",
    role: "Head of Developers",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cody Fisher",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Esther Howard",
    role: "Marketer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ralph Howard",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

function Team() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 transition-colors duration-300 overflow-hidden text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Our Team</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 italic tracking-tight">Meet the Minds</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              A group of thinkers, dreamers, and doers committed to excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="text-slate-900 dark:text-white px-6 py-2 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold">
              Join Our Team
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6 shadow-xl dark:shadow-none bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Social Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-xl flex justify-center gap-3">
                    <a href="#" className="p-2 text-white hover:text-primary-400 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="p-2 text-white hover:text-accent-400 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="p-2 text-white hover:text-primary-300 transition-colors"><Linkedin size={18} /></a>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium uppercase tracking-[0.2em]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;