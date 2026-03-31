"use client"
import { useMemo } from "react"
import { Github } from "lucide-react"
import { personalInfo, stats } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
import AnimatedCounter from "@/components/ui/AnimatedCounter"
import Button from "@/components/ui/button"

export default function ProofOfWork() {
  const grid = useMemo(() => {
    const cells: number[] = []
    for (let i = 0; i < 364; i++) {
      const r = Math.random()
      cells.push(r < 0.35 ? 0 : r < 0.55 ? 1 : r < 0.75 ? 2 : r < 0.88 ? 3 : 4)
    }
    return cells
  }, [])

  const levels = ["bg-content-muted/10", "bg-accent/20", "bg-accent/40", "bg-accent/60", "bg-accent"]

  return (
    <ParallaxSection id="proof" alternate>
      <SectionHeader title="Proof of" highlight="Work" description="Consistent building, learning, and shipping" />
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {stats.map((s) => (
          <GlassCard key={s.label} hover={false} className="text-center">
            <AnimatedCounter end={s.value} suffix={s.suffix} label={s.label} />
          </GlassCard>
        ))}
      </div>
      <GlassCard hover={false} className="overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-content-primary">Coding Activity</h3>
          <Button href={personalInfo.github} variant="ghost" size="sm"><Github size={16} /> View GitHub</Button>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="grid grid-rows-7 grid-flow-col gap-[3px] min-w-[720px]">
            {grid.map((level, i) => (
              <div key={i} className={`w-[11px] h-[11px] rounded-sm ${levels[level]} activity-cell`} title={`${level} contributions`} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-xs text-content-muted">
          <span>Less</span>
          {levels.map((l, i) => <div key={i} className={`w-[11px] h-[11px] rounded-sm ${l}`} />)}
          <span>More</span>
        </div>
      </GlassCard>
    </ParallaxSection>
  )
}
