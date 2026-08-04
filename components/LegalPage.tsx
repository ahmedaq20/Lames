import Link from 'next/link'

export interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <section className="w-full bg-white pb-24 pt-36 transition-colors duration-300 dark:bg-[#05070d] md:pt-44">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">Legal</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">Last updated: {updated}</p>
        <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-4 font-display text-xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Questions? Reach us at{' '}
            <a href="mailto:hello@lames.io" className="font-medium text-primary-600 hover:underline dark:text-primary-400">hello@lames.io</a>
            {' '}or via our{' '}
            <Link href="/contact" className="font-medium text-primary-600 hover:underline dark:text-primary-400">contact page</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
