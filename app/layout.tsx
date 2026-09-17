import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Cairo } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ThemeInitializer from "@/components/ThemeInitializer";
import LanguageInitializer from "@/components/LanguageInitializer";
import SmoothScroll from "@/components/Experience/SmoothScroll";

const inter = localFont({
  src: './fonts/inter-latin-var.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})
const spaceGrotesk = localFont({
  src: './fonts/space-grotesk-latin-var.woff2',
  variable: '--font-space-grotesk',
  weight: '300 700',
  display: 'swap',
})
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lames.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lames | Digital Product Engineering & Automation | لامِس',
    template: '%s | Lames',
  },
  description:
    'Lames builds secure digital products, intelligent business automations, and scalable cloud systems for ambitious companies. لامِس لهندسة المنتجات الرقمية وأتمتة الأعمال.',
  keywords: [
    'digital product engineering',
    'business process automation',
    'n8n automation',
    'web development',
    'mobile app development',
    'cloud infrastructure',
    'DevOps',
    'UI/UX design',
    'Lames',
    'هندسة المنتجات الرقمية',
    'أتمتة الأعمال',
    'تطوير البرمجيات',
    'لامس',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Lames | لامِس',
    title: 'Lames | Digital Product Engineering & Automation | لامِس',
    description:
      'نحن لا نبني تطبيقات فقط، نحن نبني أنظمة تعمل بدلاً عنك — We build systems that work for you.',
    locale: 'ar_SA',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LAMESolution',
    creator: '@LAMESolution',
    title: 'Lames | Digital Product Engineering & Automation | لامِس',
    description:
      'نحن لا نبني تطبيقات فقط، نحن نبني أنظمة تعمل بدلاً عنك — We build systems that work for you.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lames | لامِس',
  url: siteUrl,
  logo: `${siteUrl}/images/Logo.png`,
  description:
    'Integrated digital agency specializing in product engineering and business automation: web and mobile development, n8n workflows, cloud infrastructure, and UI/UX design.',
  sameAs: [
    'https://x.com/LAMESolution',
    'https://www.linkedin.com/company/lames-global',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+970-59-891-3350',
    contactType: 'sales',
    availableLanguage: ['ar', 'en'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable}`}
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved theme and language before first paint to avoid flash (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var t=localStorage.getItem('theme');
              if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}
              var p=window.location.pathname;
              var l=(p==='/en'||p.indexOf('/en/')===0)?'en':((p==='/ar'||p.indexOf('/ar/')===0)?'ar':localStorage.getItem('language'));
              if(l==='en'){
                document.documentElement.setAttribute('lang','en');
                document.documentElement.setAttribute('dir','ltr');
              }else{
                document.documentElement.setAttribute('lang','ar');
                document.documentElement.setAttribute('dir','rtl');
              }
            }catch(e){}})();`,
          }}
        />
      </head>
      <ThemeInitializer />
      <LanguageInitializer />
      <body className="antialiased selection:bg-primary-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <div className="relative z-10 w-full overflow-x-hidden">
            {children}
            <Footer />
          </div>
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
