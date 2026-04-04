"use client"
import { Globe, Server, Brain } from "lucide-react"
import { expertise } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"
import Badge from "@/components/ui/badge"

const icons = [Globe, Server, Brain]

export default function WhatIDo() {
  return (
    <ParallaxSection id="expertise" alternate>
      <SectionHeader title="What I" highlight="Do" description="Core expertise areas I bring to every project" />
      <div className="grid md:grid-cols-3 gap-8">
        {expertise.map((e, i) => {
          const Icon = icons[i]
          return (
            <NeoCard key={e.title} delay={i * 0.1} className={`transform ${i % 2 === 0 ? '-rotate-1 hover:-rotate-2' : 'rotate-1 hover:rotate-2'}`}>
              <div className="w-16 h-16 bg-neo-accent border-4 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Icon size={32} className="stroke-[3px] text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-black mb-3">{e.title}</h3>
              <p className="text-black font-bold text-sm leading-relaxed mb-6 bg-white shrink">{e.description}</p>
              <div className="flex flex-wrap gap-2">
                {e.highlights.map((h) => <Badge key={h} variant="accent">{h}</Badge>)}
              </div>
            </NeoCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
