'use client';

import React, { useState } from 'react';
import { SearchCheck, Blocks, ShieldCheck, Check, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [selectedService, setSelectedService] = useState('Digital Product Engineering');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      setErrors({});

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactDetails = [
    { icon: SearchCheck, text: "Free initial audit" },
    { icon: Blocks, text: "One end-to-end technical team" },
    { icon: ShieldCheck, text: "Security and scalability by design" }
  ];

  return (
    <section id="contact-form" className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 transition-colors duration-300 flex justify-center">
      {/* Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5 overflow-hidden flex flex-col md:flex-row relative z-10"
      >

        {/* Left Side - Contact Info */}
        <div className="w-full md:w-5/12 p-10 md:p-14 bg-white dark:bg-slate-900 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 italic tracking-tight"
            >
              Let&apos;s Solve What&apos;s <span className="text-primary-500">Slowing You Down</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 dark:text-slate-400 mb-12 text-lg leading-relaxed"
            >
              Tell us about the product you want to build, the process you want to automate, or the system you need to strengthen. We&apos;ll review the opportunity and suggest a practical next step.
            </motion.p>

            <div className="space-y-8">
              {contactDetails.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-5 text-slate-700 dark:text-slate-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">{detail.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-10 md:p-14 bg-white dark:bg-slate-900 relative">
          <form className="relative z-10 space-y-12" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Full Name */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative"
              >
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-transparent border-b-2 py-3 text-lg font-bold text-slate-900 dark:text-white focus:outline-none transition-all placeholder-slate-300 dark:placeholder-slate-700 ${errors.fullName
                      ? 'border-red-500'
                      : 'border-slate-100 dark:border-white/5 focus:border-primary-500'
                    }`}
                />
                <AnimatePresence>
                  {errors.fullName && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute left-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                    >
                      <AlertCircle size={14} className="mr-1" /> {errors.fullName}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group relative"
              >
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`w-full bg-transparent border-b-2 py-3 text-lg font-bold text-slate-900 dark:text-white focus:outline-none transition-all placeholder-slate-300 dark:placeholder-slate-700 ${errors.email
                      ? 'border-red-500'
                      : 'border-slate-100 dark:border-white/5 focus:border-primary-500'
                    }`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute left-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                    >
                      <AlertCircle size={14} className="mr-1" /> {errors.email}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Services Radio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">What service do you need?</label>
              <div className="flex flex-wrap gap-6">
                {['Digital Product Engineering', 'Business Automation', 'Cloud & DevOps', 'UI/UX Design', 'Free Audit'].map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <input
                        type="radio"
                        name="service"
                        checked={selectedService === service}
                        onChange={() => setSelectedService(service)}
                        className="peer sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 ${selectedService === service ? 'border-primary-500 bg-primary-500' : 'border-slate-200 dark:border-white/10 group-hover:border-primary-400'}`}></div>
                      <Check size={14} strokeWidth={4} className={`absolute text-white transition-all duration-300 ${selectedService === service ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                    </div>
                    <span className={`text-base font-bold transition-colors ${selectedService === service ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'}`}>
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group relative"
            >
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the product, workflow, or technical challenge..."
                rows={2}
                className={`w-full bg-transparent border-b-2 py-3 text-lg font-bold text-slate-900 dark:text-white focus:outline-none transition-all placeholder-slate-300 dark:placeholder-slate-700 resize-none ${errors.message
                    ? 'border-red-500'
                    : 'border-slate-100 dark:border-white/5 focus:border-primary-500'
                  }`}
              ></textarea>
              <AnimatePresence>
                {errors.message && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                  >
                    <AlertCircle size={14} className="mr-1" /> {errors.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6 flex items-center gap-6"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative overflow-hidden bg-primary-600 hover:bg-primary-500 text-white font-bold py-5 px-12 rounded-full shadow-2xl shadow-primary-500/30 transition-all duration-300 transform active:scale-95 flex items-center gap-3 ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
              >
                <span className="relative z-10 flex items-center gap-3 italic">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : 'Send Your Request'}
                </span>
              </button>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-500 font-bold flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check size={16} />
                    </div>
                    Message sent!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
