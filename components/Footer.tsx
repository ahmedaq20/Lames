import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const capabilities = [
  'Digital Product Engineering',
  'Business Process Automation',
  'Cloud, DevOps & Security',
  'UI/UX Design',
]

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 pt-20 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="relative flex w-fit items-center">
              <Image src="/images/logolightanddark.png" alt="Lames" width={100} height={100} className="block object-contain dark:hidden" />
              <Image src="/images/logo-dark-new.png" alt="Lames" width={100} height={100} className="hidden object-contain dark:block" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Lames engineers digital products, automated workflows, and secure cloud systems that help businesses operate efficiently and scale with confidence.
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">We don&apos;t just build apps. We build systems that work for you.</p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Capabilities</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {capabilities.map((capability) => (
                <li key={capability}><Link href="/#services" className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">{capability}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Start a Conversation</h4>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Have a product idea, an operational bottleneck, or disconnected systems? Let&apos;s find the right technical path forward.</p>
            <Link href="/contact" className="inline-flex rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700">Contact Lames</Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-white/5">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Lames. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/#about" className="transition-colors hover:text-slate-900 dark:hover:text-white">About</Link>
            <Link href="/portfolio" className="transition-colors hover:text-slate-900 dark:hover:text-white">Concepts</Link>
            <Link href="/contact" className="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
