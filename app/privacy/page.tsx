import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Lames collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
}

const sections: LegalSection[] = [
  {
    heading: '1. Information We Collect',
    body: [
      'When you contact us through our website, WhatsApp, or email, we collect the information you provide — such as your name, email address, phone number, and any details about your project or inquiry.',
      'We also collect limited technical information automatically, such as your IP address, browser type, and pages visited, to keep the site secure and understand how it is used.',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    body: [
      'We use the information you provide to respond to your inquiries, deliver our services, send project-related communications, and improve our website and offerings.',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    heading: '3. Sharing of Information',
    body: [
      'We may share information with trusted service providers who help us operate our business — for example, hosting, email, and analytics providers — strictly to perform services on our behalf and under confidentiality obligations.',
      'We may also disclose information where required by law or to protect our legal rights.',
    ],
  },
  {
    heading: '4. Data Retention & Security',
    body: [
      'We retain your information only for as long as necessary to fulfill the purposes described in this policy or as required by law.',
      'We apply appropriate technical and organizational measures to protect your data, though no method of transmission or storage is completely secure.',
    ],
  },
  {
    heading: '5. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of your personal information at any time by contacting us at hello@lames.io.',
    ],
  },
  {
    heading: '6. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The latest version will always be available on this page with the updated date shown above.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 8, 2026"
      intro="This Privacy Policy explains how Lames collects, uses, and protects the personal information you share with us when you use our website or contact our team."
      sections={sections}
    />
  )
}
