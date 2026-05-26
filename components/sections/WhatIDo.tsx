"use client"
import { Globe, Server, Brain } from "lucide-react"
import { expertise } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"

const icons = [Globe, Server, Brain]
const colors = ["bg-[#2F81F7]", "bg-[#2F81F7]", "bg-[#FDB927]"]

export default function WhatIDo() {
  return (
    <ParallaxSection id="expertise" alternate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-black">
        <div className="mb-16">
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-black inline-block relative">
            WHAT I
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-black"></span>
          </h2>
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:2px_black] mt-2 inline-block bg-[#2F81F7] px-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black rotate-[2deg]">
            DO.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((e, i) => {
            const Icon = icons[i]
            const color = colors[i % colors.length]
            return (
              <div key={e.title} className="bg-white border-4 border-black p-6 md:p-8 rounded-[24px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full group cursor-default">
                <div className={`w-20 h-20 ${color} rounded-2xl border-4 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                  <Icon size={40} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-black mb-4 uppercase leading-tight">{e.title}</h3>
                <p className="text-black font-bold text-lg leading-relaxed mb-8 flex-1">{e.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {e.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 bg-[#F3F3F3] border-[3px] border-black text-black text-sm font-black uppercase rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
