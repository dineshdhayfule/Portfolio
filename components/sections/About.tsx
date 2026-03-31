"use client"
import { personalInfo } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
import Image from "next/image"

export default function About() {
  return (
    <ParallaxSection id="about">
      <SectionHeader title="About" highlight="Me" description="The person behind the code" />
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2 flex justify-center">
          <GlassCard className="w-full max-w-[280px] p-1">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image src="/avatar.png" alt={personalInfo.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-content-primary">{personalInfo.name}</h3>
              <p className="text-sm text-accent-light">{personalInfo.title}</p>
            </div>
          </GlassCard>
        </div>
        <div className="md:col-span-3 space-y-4">
          {personalInfo.about.map((p, i) => (
            <p key={i} className="text-content-secondary leading-relaxed">{p}</p>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            {["Java", "Python", "Node.js", "Scikit-learn", "React", "Firebase", "MySQL"].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-accent/20">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
