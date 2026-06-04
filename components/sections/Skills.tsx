"use client"
import { Code, Server, Brain, Layout, Database, Terminal } from "lucide-react"
import { skills } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"

const iconMap: Record<string, React.ElementType> = { 
  Languages: Code, 
  "Backend & APIs": Server, 
  "AI/ML & Data": Brain, 
  Frontend: Layout, 
  Databases: Database, 
  "Tools & DevOps": Terminal 
}

const colorMap = ["bg-[#2F81F7]", "bg-[#2F81F7]", "bg-[#FDB927]", "bg-[#6366F1]", "bg-[#22c55e]", "bg-[#e7000b]"]

export default function Skills() {
  return (
    <ParallaxSection id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-b-4 border-black">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-black inline-block relative">
            TECHNICAL
            <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-1.5 sm:h-2 bg-black"></span>
          </h2>
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:1.5px_black] sm:[-webkit-text-stroke:2px_black] mt-2">
            EXPERTISE
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {skills.map((cat, ci) => {
            const Icon = iconMap[cat.category] || Code
            const accentColor = colorMap[ci % colorMap.length]
            
            return (
              <div 
                key={cat.category} 
                className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${accentColor} border-3 sm:border-4 border-black flex items-center justify-center rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                    <Icon size={24} className="text-white sm:w-7 sm:h-7" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-black leading-tight uppercase tracking-tight">{cat.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {cat.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 border-[2px] sm:border-[3px] border-black text-xs sm:text-sm font-bold bg-[#F3F3F3] text-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-default"
                    >
                      {skill.name}
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
