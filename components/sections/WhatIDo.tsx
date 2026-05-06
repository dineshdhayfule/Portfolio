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
            <NeoCard key={e.title} delay={i * 0.1} className="transform">
              <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-6 shadow-soft-sm">
                <Icon size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-extrabold uppercase text-foreground mb-3">{e.title}</h3>
              <p className="text-foreground font-medium text-sm leading-relaxed mb-6 shrink">{e.description}</p>
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
