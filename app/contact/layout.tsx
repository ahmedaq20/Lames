import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Tell us about the product you want to build, the process you want to automate, or the system you need to strengthen. We'll suggest a practical next step — including a free initial audit.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Lames',
    description:
      'Tell us about the product you want to build or the process you want to automate. Free initial audit included.',
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
