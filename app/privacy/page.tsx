'use client'

import LegalPage from '@/components/LegalPage'
import { useTranslation } from '@/locales/translations'

export default function PrivacyPage() {
  const { t } = useTranslation()
  const data = t.legal.privacy

  return (
    <LegalPage
      title={data.title}
      updated={data.updated}
      intro={data.intro}
      sections={data.sections}
    />
  )
}
