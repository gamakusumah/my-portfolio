"use client";

import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="lg:pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
