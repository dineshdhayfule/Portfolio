"use client"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import StickyCTA from "@/components/layout/StickyCTA"
import AskPortfolio from "@/components/ui/AskPortfolio"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import WhatIDo from "@/components/sections/WhatIDo"
import ProjectsSection from "@/components/sections/ProjectsSection"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Education from "@/components/sections/Education"
import Achievements from "@/components/sections/Achievements"
import Contact from "@/components/sections/Contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <ProjectsSection />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <AskPortfolio />
    </div>
  )
}
