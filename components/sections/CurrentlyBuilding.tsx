"use client"
import { Rocket, Github } from "lucide-react"
import { projects } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import Badge from "@/components/ui/badge"
import Button from "@/components/ui/button"

export default function CurrentlyBuilding() {
  const building = projects.filter((p) => p.isBuilding)
  if (!building.length) return null

  return (
    <ParallaxSection id="building" alternate>
      <SectionHeader title="Currently" highlight="Building" description="What I'm actively working on right now" highlightColor="purple" />
      {building.map((p) => (
        <div key={p.id} className="card-base p-6 md:p-8 max-w-2xl mx-auto shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl border-[3px] border-black dark:border-[#383838] flex items-center justify-center flex-shrink-0 shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              <Rocket size={24} className="text-[var(--accent)]" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-black dark:text-white">{p.title}</h3>
                <Badge variant="success"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse" />In Progress</Badge>
              </div>
              <p className="text-[var(--accent)] font-semibold text-sm mb-4">{p.subtitle}</p>
              <p className="text-[#393939] dark:text-gray-300 font-medium text-sm leading-relaxed mb-6">{p.solution}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => <Badge key={t} variant="default">{t}</Badge>)}
              </div>
              <div className="flex gap-3">
                <Button href={p.github} variant="secondary" size="md"><Github size={18} /> Follow Progress</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ParallaxSection>
  )
}
