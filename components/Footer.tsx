import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryCta } from '@/components/ui/Button'

const services = [
  { label: 'Digital Product Engineering', href: '/#services' },
  { label: 'Business Process Automation', href: '/#automation' },
  { label: 'Cloud, DevOps & Security', href: '/#services' },
  { label: 'UI/UX Design', href: '/#services' },
  { label: 'AI Agents & Intelligent Systems', href: '/#services' },
]

const company = [
  { label: 'About', href: '/#about' },
  { label: 'How We Work', href: '/#process' },
  { label: 'Why Lames', href: '/#why-lames' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
]

const EMAIL = 'hello@lames.io'
const PHONE_DISPLAY = '+970 59 891 3350'
const PHONE_HREF = 'tel:+970598913350'

const socials = [
  {
    name: 'Email',
    href: `mailto:${EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/LAMESolution',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lames-global',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125M7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/970598913350',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
      </svg>
    ),
  },
]

const linkClasses =
  'transition-colors hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-sm'

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 pt-20 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="relative flex w-fit items-center">
              <Image src="/images/logolightanddark.png" alt="Lames" width={100} height={28} className="block object-contain dark:hidden" />
              <Image src="/images/logo-dark-new.png" alt="Lames" width={100} height={28} className="hidden object-contain dark:block" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Lames engineers digital products, automated workflows, and secure cloud systems that help businesses operate efficiently and scale with confidence.
            </p>
            <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
              We don&apos;t just build apps.{' '}
              <span className="text-primary-600 dark:text-primary-400">We build systems that work for you.</span>
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 dark:border-white/10 dark:text-slate-400 dark:hover:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClasses}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className={linkClasses}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Start a Conversation</h4>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Have a product idea, an operational bottleneck, or disconnected systems? Let&apos;s find the right technical path forward.
            </p>
            <PrimaryCta size="sm" className="mb-6" />
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href={`mailto:${EMAIL}`} className={`font-medium ${linkClasses}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={PHONE_HREF} className={`font-medium ${linkClasses}`}>{PHONE_DISPLAY}</a>
              </li>
              {/* TODO(trust): confirm and publish real business details — enterprise
                  buyers look for these before reaching out:
                  <li>Office address / registered entity</li>
                  <li>Business hours, e.g. Sun–Thu · 9:00–17:00 (GMT+2)</li>
                  <li>Response-time promise, e.g. "We reply within one business day"</li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-white/5">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Lames. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="transition-colors hover:text-slate-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-slate-900 dark:hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
