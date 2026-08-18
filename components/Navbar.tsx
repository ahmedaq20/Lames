'use client';

import { useState, useEffect } from 'react';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useThemeStore } from '@/store/useThemeStore';
import { useTranslation } from '@/locales/translations';

const spySections = ['home', 'services', 'process', 'about', 'faq'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useThemeStore();
  const { t, language, toggleLanguage } = useTranslation();
  const pathname = usePathname();

  const menuItems = [
    { key: 'home', label: t.navbar.menu.home, href: '/#home' },
    { key: 'services', label: t.navbar.menu.services, href: '/#services' },
    { key: 'process', label: t.navbar.menu.process, href: '/#process' },
    { key: 'about', label: t.navbar.menu.about, href: '/#about' },
    { key: 'faq', label: t.navbar.menu.faq, href: '/#faq' },
  ];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently on screen (home page only)
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    spySections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const activeKey = pathname === '/' ? activeSection : '';

  // Smooth-scroll for same-page hash links
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname !== '/' || !href.startsWith('/#')) return;
    const el = document.getElementById(href.slice(2));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out rounded-full ${scrolled
        ? 'top-4 mx-4 md:mx-auto max-w-6xl bg-white/50 dark:bg-[#05070d]/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-3 dark:shadow-[0_8px_40px_-8px_rgba(37,99,235,0.25)]'
        : 'top-4 mx-4 md:mx-auto max-w-7xl bg-white/60 dark:bg-[#05070d]/50 backdrop-blur-xl py-3.5 md:py-5 border border-white/20 dark:border-white/5'
        }`}
    >
      {/* Scroll progress bar along the pill's bottom edge */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-8 right-8 h-[2px] origin-left rtl:origin-right rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src='/images/logolightanddark.png'
            alt='Lames Logo'
            width={100}
            height={28}
            className="dark:hidden block object-contain"
            priority
          />
          <Image
            src='/images/logo-dark-new.png'
            alt='Lames Logo'
            width={100}
            height={28}
            className="hidden dark:block object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 dark:bg-white/[0.04] p-1.5 rounded-full border border-white/50 dark:border-white/10 backdrop-blur-md shadow-inner">
          {menuItems.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white/80 dark:bg-white/10 shadow-sm ring-1 ring-primary-500/20"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href='/contact' className="bg-primary-600 backdrop-blur-md text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:bg-primary-500 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] border border-primary-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950">
            {t.navbar.cta}
          </Link>
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 shadow-sm backdrop-blur-md transition-all duration-300"
            aria-label="Switch language"
            title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe size={16} className="text-primary-500" />
            <span>{t.navbar.switchLanguageCode}</span>
          </button>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 shadow-sm backdrop-blur-md transition-all duration-300 hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm"
            aria-label="Switch language"
          >
            <Globe size={15} className="text-primary-500" />
            <span>{t.navbar.switchLanguageCode}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-800 dark:text-white bg-white/40 dark:bg-white/10 p-2 rounded-xl border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-[calc(100%+16px)] left-0 right-0 bg-slate-50 dark:bg-slate-950 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-4 flex flex-col gap-1 md:hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_48px_-10px_rgba(37,99,235,0.3)]"
            >
              {menuItems.map((item, index) => {
                const isActive = activeKey === item.key;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between text-lg font-medium py-3 px-4 rounded-2xl transition-colors ${isActive
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-white/10'
                        }`}
                    >
                      {item.label}
                      {isActive && <span className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 + menuItems.length * 0.05 }}
              >
                <Link
                  href='/contact'
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary-600 backdrop-blur-md border border-primary-500/40 text-white font-bold py-3.5 rounded-2xl mt-2 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:bg-primary-500 transition-colors text-center"
                >
                  {t.navbar.cta}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
