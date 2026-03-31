"use client"
import { Rocket, Github } from "lucide-react"
import { projects } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
import Badge from "@/components/ui/badge"
import Button from "@/components/ui/Button"

export default function CurrentlyBuilding() {
  const building = projects.filter((p) => p.isBuilding)
  if (!building.length) return null

  return (
    <ParallaxSection id="building" alternate>
      <SectionHeader title="Currently" highlight="Building" description="What I'm actively working on right now" />
      {building.map((p) => (
        <GlassCard key={p.id} hover={false} className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Rocket size={24} className="text-success" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-content-primary">{p.title}</h3>
                <Badge variant="success"><span className="w-1.5 h-1.5 bg-success rounded-full mr-1 animate-pulse" />In Progress</Badge>
              </div>
              <p className="text-content-muted text-sm mb-3">{p.subtitle}</p>
              <p className="text-content-secondary text-sm leading-relaxed mb-4">{p.solution}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => <Badge key={t} variant="accent">{t}</Badge>)}
              </div>
              <div className="flex gap-3">
                <Button href={p.github} variant="secondary" size="sm"><Github size={14} /> Follow Progress</Button>
              </div>
            </div>
          </div>
        </GlassCard>
      ))}
    </ParallaxSection>
  )
}
