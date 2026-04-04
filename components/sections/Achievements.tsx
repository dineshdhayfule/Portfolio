"use client"
import { Award, Briefcase, Brain, Cloud, BookOpen } from "lucide-react"
import { achievements } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"

const icons = [Cloud, Cloud, Briefcase, Award, BookOpen]

export default function Achievements() {
  return (
    <ParallaxSection id="certifications">
      <SectionHeader title="Certifications" highlight=" & Courses" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((a, i) => {
          const Icon = icons[i]
          return (
            <NeoCard key={a.title} delay={i * 0.1} className={`transform ${i % 2 === 0 ? '-rotate-1 hover:-rotate-2' : 'rotate-1 hover:rotate-2'}`}>
              <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Icon size={32} className="text-black stroke-[3px]" /></div>
              <h4 className="font-black text-xl uppercase text-black mb-2">{a.title}</h4>
              <p className="text-black font-bold uppercase tracking-wider bg-neo-secondary inline-block px-2 border-2 border-black mb-4">{a.provider}</p>
              <p className="text-black font-bold leading-relaxed bg-white border-2 border-black p-3 shadow-neo-sm shrink">{a.description}</p>
            </NeoCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
