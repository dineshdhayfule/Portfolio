"use client"
import { Globe, Server, Brain } from "lucide-react"
import { expertise } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"

const icons = [Globe, Server, Brain]
const colors = ["bg-[#2F81F7]", "bg-[#2F81F7]", "bg-[#FDB927]"]

export default function WhatIDo() {
  return (
    <ParallaxSection id="expertise" alternate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-b-4 border-black">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-black inline-block relative">
            WHAT I
            <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-1.5 sm:h-2 bg-black"></span>
          </h2>
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:1.5px_black] sm:[-webkit-text-stroke:2px_black] mt-2 inline-block bg-[#2F81F7] px-3 sm:px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-3 sm:border-4 border-black rotate-[2deg]">
            DO.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {expertise.map((e, i) => {
            const Icon = icons[i]
            const color = colors[i % colors.length]
            return (
              <div key={e.title} className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[24px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full group cursor-default">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${color} rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black flex items-center justify-center mb-6 sm:mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                  <Icon size={32} className="text-white sm:w-10 sm:h-10" strokeWidth={3} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 sm:mb-4 uppercase leading-tight">{e.title}</h3>
                <p className="text-black font-bold text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-1">{e.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {e.highlights.map((h) => (
                    <span key={h} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#F3F3F3] border-[2px] sm:border-[3px] border-black text-black text-xs sm:text-sm font-black uppercase rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
