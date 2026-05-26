"use client"
import { Award, Briefcase, Cloud, BookOpen } from "lucide-react"
import { achievements } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"

const icons = [Cloud, Cloud, Briefcase, Award, BookOpen]
const colors = ["bg-[#FDB927]", "bg-[#2F81F7]", "bg-[#2F81F7]", "bg-[#6366F1]", "bg-[#22c55e]"]

export default function Achievements() {
  return (
    <ParallaxSection id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-black">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[40px] md:text-[60px] font-black leading-none uppercase text-black inline-block relative">
            CERTIFICATIONS
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-black"></span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((a, i) => {
            const Icon = icons[i] || Award
            const color = colors[i % colors.length]
            return (
              <div key={a.title} className="bg-white border-4 border-black p-6 md:p-8 rounded-[24px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full group cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 ${color} rounded-2xl border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                    <Icon size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="px-3 py-1 bg-[#F3F3F3] border-[3px] border-black text-black text-xs font-black uppercase rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Verified
                  </span>
                </div>
                <h4 className="font-black text-2xl text-black mb-2 uppercase leading-tight">{a.title}</h4>
                <p className="text-[#2F81F7] font-bold text-lg mb-4 uppercase">{a.provider}</p>
                <p className="text-black font-medium text-base leading-relaxed mt-auto">{a.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
