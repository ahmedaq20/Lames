import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Lames website and services.',
  alternates: { canonical: '/terms' },
}

const sections: LegalSection[] = [
  {
    heading: '1. Acceptance of Terms',
    body: [
      'By accessing or using the Lames website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.',
    ],
  },
  {
    heading: '2. Our Services',
    body: [
      'Lames provides digital product engineering, business process automation, cloud and DevOps, and UI/UX design services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate written agreement or proposal.',
    ],
  },
  {
    heading: '3. Use of the Website',
    body: [
      'You agree to use this website lawfully and not to attempt to disrupt, damage, or gain unauthorized access to any part of it or its underlying systems.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    body: [
      'All content on this website — including text, graphics, logos, and code — is owned by Lames or its licensors and is protected by applicable intellectual property laws. Ownership of deliverables produced during a client engagement is governed by the terms of the relevant project agreement.',
    ],
  },
  {
    heading: '5. Limitation of Liability',
    body: [
      'This website and its content are provided on an "as is" basis. To the fullest extent permitted by law, Lames is not liable for any indirect or consequential damages arising from your use of the website.',
    ],
  },
  {
    heading: '6. Changes to These Terms',
    body: [
      'We may update these Terms of Service from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: '7. Contact',
    body: [
      'For any questions about these terms, contact us at hello@lames.io.',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 8, 2026"
      intro="These Terms of Service govern your access to and use of the Lames website and services. Please read them carefully."
      sections={sections}
    />
  )
}
