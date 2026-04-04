"use client"
import { personalInfo } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"
import Image from "next/image"

export default function About() {
  return (
    <ParallaxSection id="about">
      <SectionHeader title="About" highlight="Me" description="The person behind the code" />
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <NeoCard className="w-full max-w-[320px] p-0 overflow-hidden rotate-2 bg-neo-secondary">
            <div className="relative w-full aspect-square border-b-4 border-black">
              <Image src="/avatar.png" alt={personalInfo.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="p-6 text-center bg-neo-secondary">
              <h3 className="font-black text-2xl uppercase tracking-wider text-black">{personalInfo.name}</h3>
              <p className="text-sm font-bold uppercase text-black/70 tracking-widest">{personalInfo.title}</p>
            </div>
          </NeoCard>
        </div>
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white border-4 border-black p-6 shadow-neo-md -rotate-1">
            {personalInfo.about.map((p, i) => (
              <p key={i} className="text-black font-bold leading-relaxed mb-4 last:mb-0 text-lg">{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4 pl-2">
            {["Java", "Python", "Node.js", "Scikit-learn", "React", "Firebase", "MySQL"].map((s) => (
              <span key={s} className="px-4 py-2 border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-widest bg-neo-secondary text-black hover:-translate-y-1 transition-transform cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
