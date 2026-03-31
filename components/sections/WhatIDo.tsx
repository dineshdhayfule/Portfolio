"use client"
import { Globe, Server, Brain } from "lucide-react"
import { expertise } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
import Badge from "@/components/ui/badge"

const icons = [Globe, Server, Brain]

export default function WhatIDo() {
  return (
    <ParallaxSection id="expertise" alternate>
      <SectionHeader title="What I" highlight="Do" description="Core expertise areas I bring to every project" />
      <div className="grid md:grid-cols-3 gap-6">
        {expertise.map((e, i) => {
          const Icon = icons[i]
          return (
            <GlassCard key={e.title} delay={i * 0.1}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={24} className="text-accent-light" />
              </div>
              <h3 className="text-xl font-bold text-content-primary mb-2">{e.title}</h3>
              <p className="text-content-secondary text-sm leading-relaxed mb-4">{e.description}</p>
              <div className="flex flex-wrap gap-2">
                {e.highlights.map((h) => <Badge key={h} variant="accent">{h}</Badge>)}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </ParallaxSection>
  )
}
