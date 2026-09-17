'use client';

import React, { useState } from 'react';
import { SearchCheck, Blocks, ShieldCheck, Check, AlertCircle, Loader2, type LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/locales/translations';
import { getContactInfo } from '@/lib/contact';

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

// Laravel API endpoint. Prefer the full endpoint when provided, otherwise build it
// from NEXT_PUBLIC_BASE_API_URL and the Laravel contact route.
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/\/+$/, '');
const CONTACT_ROUTE = process.env.NEXT_PUBLIC_CONTACT_ROUTE ?? '/contact';
const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
  (BASE_API_URL ? `${BASE_API_URL}${CONTACT_ROUTE.startsWith('/') ? CONTACT_ROUTE : `/${CONTACT_ROUTE}`}` : undefined);

function buildWhatsAppUrl(data: FormData, service: string, isAr: boolean) {
  const contact = getContactInfo(isAr ? 'ar' : 'en');
  const greeting = isAr ? `مرحباً لميس، أنا ${data.fullName}.` : `Hi Lames, I'm ${data.fullName}.`;
  const serviceLabel = isAr ? `الخدمة المطلوبة: ${service}` : `Service: ${service}`;
  const emailLabel = isAr ? `البريد الإلكتروني: ${data.email}` : `Email: ${data.email}`;

  const text = [
    greeting,
    serviceLabel,
    emailLabel,
    '',
    data.message,
  ].join('\n');
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

const detailIcons: LucideIcon[] = [SearchCheck, Blocks, ShieldCheck];

function Contact() {
  const { t, language } = useTranslation();
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const services = t.contact.form.services;
  const currentService = selectedService || services[0];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contact.form.errors.fullNameRequired;
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitError(false);

    if (!CONTACT_ENDPOINT) {
      // Endpoint not configured: surface the WhatsApp link so the lead isn't lost
      setSubmitError(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          full_name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          service: currentService,
          message: formData.message,
          source: 'lames-website-contact',
          language,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setIsSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
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

  const contactDetails = t.contact.details.map((text, i) => ({
    icon: detailIcons[i] || SearchCheck,
    text,
  }));

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
        <div className="w-full md:w-5/12 p-10 md:p-14 bg-white dark:bg-slate-900 flex flex-col justify-between border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-100 dark:border-white/5">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 italic tracking-tight"
            >
              {t.contact.headingMain} <span className="text-primary-500">{t.contact.headingAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 dark:text-slate-400 mb-12 text-lg leading-relaxed"
            >
              {t.contact.subtitle}
            </motion.p>

            <div className="space-y-8">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-5 text-slate-700 dark:text-slate-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shrink-0">
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
                  {t.contact.form.fullName}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.contact.form.fullNamePlaceholder}
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
                      className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                    >
                      <AlertCircle size={14} className="mr-1 rtl:mr-0 rtl:ml-1" /> {errors.fullName}
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
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
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
                      className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                    >
                      <AlertCircle size={14} className="mr-1 rtl:mr-0 rtl:ml-1" /> {errors.email}
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
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{t.contact.form.serviceLabel}</label>
              <div className="flex flex-wrap gap-6">
                {services.map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group select-none">
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <input
                        type="radio"
                        name="service"
                        checked={currentService === service}
                        onChange={() => setSelectedService(service)}
                        className="peer sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 ${currentService === service ? 'border-primary-500 bg-primary-500' : 'border-slate-200 dark:border-white/10 group-hover:border-primary-400'}`}></div>
                      <Check size={14} strokeWidth={4} className={`absolute text-white transition-all duration-300 ${currentService === service ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                    </div>
                    <span className={`text-base font-bold transition-colors ${currentService === service ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'}`}>
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
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary-500">{t.contact.form.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
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
                    className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 flex items-center text-red-500 text-xs font-bold"
                  >
                    <AlertCircle size={14} className="mr-1 rtl:mr-0 rtl:ml-1" /> {errors.message}
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
                      <Loader2 size={20} className="animate-spin" /> {t.contact.form.submitting}
                    </>
                  ) : t.contact.form.submit}
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
                    {t.contact.form.success}
                  </motion.div>
                )}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-bold text-red-500"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>
                      {t.contact.form.error}{' '}
                      <a
                        href={buildWhatsAppUrl(formData, currentService, language === 'ar')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-red-400"
                      >
                        {t.contact.form.whatsappFallback}
                      </a>
                    </span>
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
