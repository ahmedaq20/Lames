'use client'

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AutomationShowcase from "@/components/AutomationShowcase";
import About from "@/components/About";
// import Team from "@/components/Team";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import WhyLames from "@/components/WhyLames";
import Idea from "@/components/Idea";
import CTASection from "@/components/CTASection";


function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AutomationShowcase />
      <Process />
      {/* Mid-page conversion band: keeps a CTA within 2–3 viewports of scroll */}
      <CTASection />
      <About />
      {/* <Team /> */}
      <WhyLames />
      <FAQ />
      <Idea />
    </main>
  );
}
export default Home
