import React from 'react';
import { 
  Zap, Globe, LayoutDashboard, ArrowLeft, CheckCircle2,
  MessageSquare, Hash, Calendar, Send, FileSpreadsheet, Notebook, Layout, Mail,
  Instagram, Search, Target, Palette, Cloud, ShieldCheck, BarChart4, Box, Code2, Settings, Users, Share2, Monitor, Database
} from 'lucide-react';
import { Service } from '@/types';

const services: Service[] = [
  {
    title: "Automation Solutions",
    description: "Efficiency through smart automation. We help businesses reduce manual work and operational costs by optimizing workflows.",
    icon: Zap,
    color: "from-primary-500 to-accent-500",
    features: ["Reduce operational costs", "Save time and manual effort", "Minimize human errors", "Improve workflow efficiency", "Simple and user-friendly systems"],
    ctaText: "Start Automating Your Business",
    image: "/services/n8n-color.svg"
  },
  {
    title: "Digital Presence",
    description: "Build a strong brand identity. We design modern websites and landing pages that clearly communicate your vision and value.",
    icon: Globe,
    color: "from-accent-600 to-primary-500",
    features: ["Modern and responsive design", "Clear brand representation", "SEO-friendly structure", "Blog integration for content publishing", "Optimized user experience"],
    ctaText: "Create Your Online Presence",
    image: "/services/presence.png"
  },
  {
    title: "Custom Systems & Dashboards",
    description: "Tailored systems for full control. We build custom dashboards and management tools built exactly around your operations.",
    icon: LayoutDashboard,
    color: "from-accent-500 to-primary-400",
    features: ["Fully customized solutions", "Centralized data management", "Advanced dashboards & analytics", "Scalable architecture", "Secure and reliable systems"],
    ctaText: "Build Your Custom System",
    image: "/services/systems.png"
  },
];

const serviceEcosystems = [
  // 0: Automation (n8n Ecosystem)
  [
    { name: 'ChatGPT', color: 'bg-[#10a37f]', icon: MessageSquare, angle: 0 },
    { name: 'Slack', color: 'bg-[#4A154B]', icon: Hash, angle: 45 },
    { name: 'GCal', color: 'bg-[#4285F4]', icon: Calendar, angle: 90 },
    { name: 'Telegram', color: 'bg-[#0088cc]', icon: Send, angle: 135 },
    { name: 'Excel', color: 'bg-[#1D6F42]', icon: FileSpreadsheet, angle: 180 },
    { name: 'Notion', color: 'bg-[#000000]', icon: Notebook, angle: 225 },
    { name: 'Trello', color: 'bg-[#0079BF]', icon: Layout, angle: 270 },
    { name: 'Gmail', color: 'bg-[#EA4335]', icon: Mail, angle: 315 },
  ],
  // 1: Digital Presence (Growth Ecosystem)
  [
    { name: 'Instagram', color: 'bg-[#E4405F]', icon: Instagram, angle: 0 },
    { name: 'Google', color: 'bg-[#4285F4]', icon: Search, angle: 45 },
    { name: 'Social', color: 'bg-[#0668E1]', icon: Share2, angle: 90 },
    { name: 'Performance', color: 'bg-[#F59E0B]', icon: Zap, angle: 135 },
    { name: 'Ads', color: 'bg-[#FF4500]', icon: Target, angle: 180 },
    { name: 'Creative', color: 'bg-[#EC4899]', icon: Palette, angle: 225 },
    { name: 'Web', color: 'bg-[#6366F1]', icon: Monitor, angle: 270 },
    { name: 'Vercel', color: 'bg-[#000000]', icon: Cloud, angle: 315 },
  ],
  // 2: Custom Systems (Technical Ecosystem)
  [
    { name: 'Database', color: 'bg-[#336791]', icon: Database, angle: 0 },
    { name: 'Security', color: 'bg-[#10B981]', icon: ShieldCheck, angle: 45 },
    { name: 'Analytics', color: 'bg-[#8B5CF6]', icon: BarChart4, angle: 90 },
    { name: 'AWS', color: 'bg-[#FF9900]', icon: Cloud, angle: 135 },
    { name: 'Users', color: 'bg-[#4F46E5]', icon: Users, angle: 180 },
    { name: 'Control', color: 'bg-[#64748B]', icon: Settings, angle: 225 },
    { name: 'Code', color: 'bg-[#000000]', icon: Code2, angle: 270 },
    { name: 'Infrastructure', color: 'bg-[#FF9900]', icon: Box, angle: 315 },
  ],
];

import { motion } from 'framer-motion';

function Services() {
  return (
    <div id="services" className="w-full">
      {/* Intro Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-slate-50 dark:bg-slate-950 py-16 px-6 md:px-12 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 uppercase tracking-[0.3em] text-xs">Our Expertise</h3>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight italic">
            Services We <span className="text-primary-600">Offer</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Revolutionizing the way you do business through innovative automation, digital presence, and custom management systems.
          </p>
        </div>
      </motion.section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const satellites = serviceEcosystems[index] || [];

        return (
          <motion.section
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`w-full py-16 md:py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${index % 3 === 0 ? "bg-white dark:bg-slate-900" :
              index % 3 === 1 ? "bg-slate-50 dark:bg-slate-950" :
                "bg-primary-50/30 dark:bg-primary-950/10"
              }`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br ${service.color} blur-[120px] opacity-10 pointer-events-none`}></div>

            <div className={`max-w-7xl mx-auto relative z-10 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`h-1 w-20 bg-gradient-to-r ${service.color}`}></div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                          <span className="font-medium text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4">
                  <a href="#" className="group inline-flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                    <span>{service.ctaText}</span>
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 flex justify-center items-center perspective-[1000px]">
                <div className={`relative group ${index === 0 ? 'animate-float-y' :
                  index === 1 ? 'animate-drift-x' :
                    'animate-float-diagonal'
                  }`}>

                  {/* Orbit Background Effects */}
                  <div className="absolute inset-0 -m-8 flex items-center justify-center opacity-60">
                    {/* Satellite Orbit Rings */}
                    <div className="absolute w-[160%] h-[160%] border border-primary-500/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
                    <div className={`absolute w-[130%] h-[130%] border border-accent-500/5 rounded-full ${index % 2 === 0 ? 'animate-[spin_30s_linear_infinite_reverse]' : 'animate-[spin_20s_linear_infinite]'}`}></div>
                    
                    {/* Satellites */}
                    <div className={`absolute inset-0 ${index % 2 === 0 ? 'animate-[spin_30s_linear_infinite]' : 'animate-[spin_40s_linear_infinite_reverse]'} pointer-events-none`}>
                      {satellites.map((sat, sIndex) => (
                        <div 
                          key={sIndex}
                          className="absolute top-1/2 left-1/2"
                          style={{ transform: `rotate(${sat.angle}deg) translateX(180px) rotate(-${sat.angle}deg)` }}
                        >
                           <div className={index % 2 === 0 ? 'animate-[spin_30s_linear_infinite_reverse]' : 'animate-[spin_40s_linear_infinite]'}>
                              <div className={`w-10 h-10 md:w-12 md:h-12 ${sat.color} rounded-xl shadow-lg flex items-center justify-center text-white border border-white/20`}>
                                 <sat.icon className="w-5 h-5 md:w-6 md:h-6" />
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index === 1 && ( // Digital Presence: Fluidity / Liquid
                    <div className="absolute inset-0 -m-12 animate-liquid bg-gradient-to-tr from-primary-500/20 to-accent-500/20 blur-xl opacity-40"></div>
                  )}

                  {index === 2 && ( // Custom Systems: Control / Matrix
                    <div className="absolute inset-0 -m-8 opacity-20 overflow-hidden rounded-3xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]">
                      <div className="absolute inset-0 w-full h-1 bg-primary-500/50 animate-scanline blur-[2px]"></div>
                    </div>
                  )}

                  {/* Secondary Rotating Rings */}
                  <div className={`absolute inset-0 scale-[1.6] border border-slate-400 dark:border-white/20 rounded-full ${index === 0 ? 'animate-[spin_25s_linear_infinite]' :
                    index === 1 ? 'animate-[spin_15s_linear_infinite]' :
                      'animate-[spin_35s_linear_infinite]'
                    } opacity-30`}></div>
                  
                  {/* CENTRAL HUB CONTAINER */}
                  <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full relative z-10 transition-all duration-700 
                                  bg-transparent flex items-center justify-center
                                  border border-slate-100 dark:border-white/10 overflow-hidden`}>

                    {index === 0 ? ( // Automation Center: n8n Hub
                      <div className="flex items-center justify-center transition-transform duration-500">
                        <img
                          src={service.image}
                          className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(234,75,113,0.4)]"
                          alt="n8n icon"
                        />
                      </div>
                    ) : index === 1 ? ( // Digital Presence Center: Global Connectivity
                       <div className="flex flex-col items-center justify-center text-primary-600 dark:text-primary-400">
                         <Globe className="w-32 h-32 md:w-48 md:h-48 animate-pulse-slow drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]" />
                       </div>
                    ) : ( // Custom Systems Center: Control Panel
                       <div className="flex flex-col items-center justify-center text-accent-500">
                         <LayoutDashboard className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]" />
                       </div>
                    )}
                  </div>

                  {/* Reflection/Glow Base */}
                  <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-gradient-to-t ${service.color} blur-3xl opacity-20 transition-opacity duration-500`}></div>
                </div>
              </div>

            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

export default Services;
