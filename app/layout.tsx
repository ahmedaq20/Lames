import type { Metadata } from "next";
import "./globals.css";
import { Tajawal } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeInitializer from "@/components/ThemeInitializer";
import SmoothScroll from "@/components/Experience/SmoothScroll";
import CustomCursor from "@/components/Experience/CustomCursor";

const tajawal = Tajawal({ variable: '--font-tajawal', weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lames | Cinematic WebGL Experience",
  description: "A luxury interactive experience for Lames Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${tajawal.className} dark`} lang="en" dir="ltr">
      <ThemeInitializer />
      <body className="antialiased selection:bg-primary-500/30">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <div className="relative z-10 w-full overflow-x-hidden">
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
