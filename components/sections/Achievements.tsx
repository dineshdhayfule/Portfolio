"use client"
import { Award, Briefcase, Brain, Cloud, BookOpen } from "lucide-react"
import { achievements } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"

const icons = [Cloud, Cloud, Briefcase, Award, BookOpen]

export default function Achievements() {
  return (
    <ParallaxSection id="certifications">
      <SectionHeader title="Certifications" highlight=" & Courses" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => {
          const Icon = icons[i]
          return (
            <GlassCard key={a.title} delay={i * 0.1}>
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4"><Icon size={20} className="text-accent-light" /></div>
              <h4 className="font-bold text-content-primary mb-1">{a.title}</h4>
              <p className="text-accent-light text-sm font-medium mb-2">{a.provider}</p>
              <p className="text-content-muted text-sm">{a.description}</p>
            </GlassCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
