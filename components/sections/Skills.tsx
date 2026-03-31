"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Brain, Layout, Database, Terminal } from "lucide-react"
import { skills } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"

const iconMap: Record<string, React.ElementType> = { Languages: Code, "Backend & APIs": Server, "AI/ML & Data": Brain, Frontend: Layout, Databases: Database, "Tools & DevOps": Terminal }

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm"><span className="text-content-primary font-medium">{name}</span><span className="text-content-muted font-mono">{level}%</span></div>
      <div className="h-2 bg-bg-card rounded-full overflow-hidden border border-[var(--border)]">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-accent" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <ParallaxSection id="skills" alternate>
      <SectionHeader title="Technical" highlight="Skills" description="Technologies I work with, rated by proficiency" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat, ci) => {
          const Icon = iconMap[cat.category] || Code
          return (
            <GlassCard key={cat.category} delay={ci * 0.08}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center"><Icon size={20} className="text-accent-light" /></div>
                <h3 className="text-lg font-bold text-content-primary">{cat.category}</h3>
              </div>
              <div className="space-y-3">
                {cat.items.map((skill, si) => <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.05} />)}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
