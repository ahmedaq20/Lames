import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 pt-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
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
            </div>
            <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed max-w-xs">
              We are a creative agency committed to building digital products that last.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">The Agency</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">SEO & Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Stay updated on everything new</h4>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm placeholder-slate-400 dark:placeholder-slate-600 transition-all shadow-sm dark:shadow-none"
              />
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors text-sm shadow-md dark:shadow-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-600 text-sm">© 2024 Agency Station. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-600">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;