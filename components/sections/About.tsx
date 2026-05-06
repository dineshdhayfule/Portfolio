"use client"
import { personalInfo } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"
import Image from "next/image"

export default function About() {
  return (
    <ParallaxSection id="about">
      <SectionHeader title="About" highlight="Me" description="The person behind the code" />
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <NeoCard className="w-full max-w-[320px] p-0 overflow-hidden bg-white">
            <div className="relative w-full aspect-square border-b border-gray-200">
              <Image src="/avatar.png" alt={personalInfo.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="p-6 text-center bg-white">
              <h3 className="font-extrabold text-2xl uppercase tracking-tight text-foreground">{personalInfo.name}</h3>
              <p className="text-sm font-semibold uppercase text-muted tracking-widest">{personalInfo.title}</p>
            </div>
          </NeoCard>
        </div>
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 p-6 shadow-soft-md rounded-2xl">
            {personalInfo.about.map((p, i) => (
              <p key={i} className="text-foreground font-medium leading-relaxed mb-4 last:mb-0 text-lg">{p}</p>
            ))}
          </div>

        </div>
      </div>
    </ParallaxSection>
  )
}
