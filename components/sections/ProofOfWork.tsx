"use client"
import { useMemo } from "react"
import { Github } from "lucide-react"
import { personalInfo, stats } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
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

  const levels = ["bg-[#ebebeb] dark:bg-[#1f1f1f]", "bg-[var(--accent)]/30", "bg-[var(--accent)]/50", "bg-[var(--accent)]/70", "bg-[var(--accent)]"]

  return (
    <ParallaxSection id="proof" alternate>
      <SectionHeader title="Proof of" highlight="Work" description="Consistent building, learning, and shipping" highlightColor="red" />
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="card-base p-6 text-center shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <AnimatedCounter end={s.value} suffix={s.suffix} label={s.label} />
          </div>
        ))}
      </div>
      <div className="card-base p-6 md:p-8 overflow-hidden shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-black dark:text-white">Coding Activity</h3>
          <Button href={personalInfo.github} variant="secondary" size="sm"><Github size={16} /> View GitHub</Button>
        </div>
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="grid grid-rows-7 grid-flow-col gap-[3px] min-w-[720px]">
            {grid.map((level, i) => (
              <div key={i} className={`w-[11px] h-[11px] rounded-sm ${levels[level]} transition-colors hover:ring-2 hover:ring-black dark:hover:ring-white`} title={`${level} contributions`} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-[#717171]">
          <span>Less</span>
          {levels.map((l, i) => <div key={i} className={`w-[11px] h-[11px] rounded-sm ${l}`} />)}
          <span>More</span>
        </div>
      </div>
    </ParallaxSection>
  )
}
