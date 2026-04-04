"use client"
import { Code, Server, Brain, Layout, Database, Terminal } from "lucide-react"
import { skills } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"

const iconMap: Record<string, React.ElementType> = { Languages: Code, "Backend & APIs": Server, "AI/ML & Data": Brain, Frontend: Layout, Databases: Database, "Tools & DevOps": Terminal }

export default function Skills() {
  return (
    <ParallaxSection id="skills" alternate>
      <SectionHeader title="Technical" highlight="Skills" description="Technologies I work with across product and platform development" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat, ci) => {
          const Icon = iconMap[cat.category] || Code
          return (
            <NeoCard key={cat.category} delay={ci * 0.08} className={`transform ${ci % 2 === 0 ? 'rotate-1 hover:rotate-2' : '-rotate-1 hover:-rotate-2'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Icon size={32} className="text-black stroke-[3px]" /></div>
                <h3 className="text-2xl font-black uppercase text-black leading-tight border-b-4 border-black pb-1">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 border-4 border-black text-xs font-black uppercase tracking-widest bg-neo-secondary text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </NeoCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
