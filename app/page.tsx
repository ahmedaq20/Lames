'use client'

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
// import Team from "@/components/Team";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import WhyLames from "@/components/WhyLames";
import Idea from "@/components/Idea";


function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <About />
      {/* <Team /> */}
      <WhyLames />
      <FAQ />
      <Idea />
    </main>
  );
}
export default Home
