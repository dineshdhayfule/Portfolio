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
            <NeoCard key={cat.category} delay={ci * 0.08} className="transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-surface border border-gray-200 rounded-xl flex items-center justify-center shadow-soft-sm"><Icon size={28} className="text-foreground" /></div>
                <h3 className="text-xl font-extrabold uppercase text-foreground leading-tight">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 border border-gray-200 text-xs font-semibold uppercase tracking-widest bg-white text-foreground shadow-soft-sm rounded-full cursor-default"
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
