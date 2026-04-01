"use client"
import { Code, Server, Brain, Layout, Database, Terminal } from "lucide-react"
import { skills } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"

const iconMap: Record<string, React.ElementType> = { Languages: Code, "Backend & APIs": Server, "AI/ML & Data": Brain, Frontend: Layout, Databases: Database, "Tools & DevOps": Terminal }

export default function Skills() {
  return (
    <ParallaxSection id="skills" alternate>
      <SectionHeader title="Technical" highlight="Skills" description="Technologies I work with across product and platform development" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat, ci) => {
          const Icon = iconMap[cat.category] || Code
          return (
            <GlassCard key={cat.category} delay={ci * 0.08}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center"><Icon size={20} className="text-accent-light" /></div>
                <h3 className="text-lg font-bold text-content-primary">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-[#0f141a] border border-[#00d4ff33] text-[#e6edf3] transition-all duration-200 hover:border-[#00d4ff66] hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
