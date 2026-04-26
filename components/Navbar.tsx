'use client';

import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeStore } from '@/store/useThemeStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeStore();


  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // const menuItems = ['الصفحة الرئيسية', 'الخدمات', 'من نحن', 'أعمالنا'];
  // const menuItemsen = ['home', 'services', 'about', 'portfolio'];
  const menuDict = {
    home: 'Home',
    services: 'Services',
    about: 'About',
    portfolio: 'Portfolio',
  };

  const getHref = (item: string) => {
    if (item === "home") return "/";
    if (item === "services") return "#services";
    if (item === "about") return "#about";
    return `/${item}`;
  };


  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out rounded-full ${scrolled
        ? 'top-4 mx-4 md:mx-auto max-w-6xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full py-3 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
        : 'top-0 w-full bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl py-5 border-b border-white/20 dark:border-white/5 rounded-full mt-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="relative flex items-center">
            {/* Light Mode Logo */}
            <Image
              src='/images/logolightanddark.png'
              alt='Agency Logo'
              width={100}
              height={100}
              className="dark:hidden block object-contain"
              priority
            />
            {/* Dark Mode Logo */}
            <Image
              src='/images/logo-dark-new.png'
              alt='Agency Logo'
              width={100}
              height={100}
              className="hidden dark:block object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 dark:bg-slate-800/40 p-1.5 rounded-full border border-white/50 dark:border-white/10 backdrop-blur-md shadow-inner">
          {Object.entries(menuDict).map(([key, value]) => (

            <Link
              key={key}
              // href={item === "home" ? "/" : `/${item}`||`#${item}`}
              href={getHref(key)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href='/contact' className="bg-primary-600/90 backdrop-blur-md text-white hover:bg-primary-600 font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] border border-primary-500/50">
            contact us
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 shadow-sm backdrop-blur-md transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-800 dark:text-white bg-white/40 dark:bg-white/10 p-2 rounded-xl border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-[calc(100%+16px)] left-4 right-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-3xl p-6 flex flex-col gap-4 md:hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
            {Object.entries(menuDict).map(([key, value]) => (
              <button
                key={key}
                className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-white/10 py-3 px-4 rounded-xl transition-colors text-right"
                onClick={() => {
                  smoothScroll(key);
                  setIsOpen(false);
                }}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            ))}

            <Link href='/contact' className="bg-gradient-to-r from-primary-600/90 to-accent-500/90 backdrop-blur-md border border-primary-400/30 text-white font-bold py-3.5 rounded-2xl mt-2 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.4)] transition-shadow text-center">
              contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
