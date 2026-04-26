'use client'

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
// import Team from "@/components/Team";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Idea from "@/components/Idea";


function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* <Team /> */}
      <Projects />
      <FAQ />
      <Testimonials />
      <Idea />
    </main>
  );
}
export default Home
