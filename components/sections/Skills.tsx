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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-black">
        <div className="mb-16">
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-black inline-block relative">
            TECHNICAL
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-black"></span>
          </h2>
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:2px_black] mt-2">
            EXPERTISE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, ci) => {
            const Icon = iconMap[cat.category] || Code
            const accentColor = colorMap[ci % colorMap.length]
            
            return (
              <div 
                key={cat.category} 
                className="bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                  <div className={`w-14 h-14 ${accentColor} border-4 border-black flex items-center justify-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                    <Icon size={28} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black text-black leading-tight uppercase tracking-tight">{cat.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 border-[3px] border-black text-sm font-bold bg-[#F3F3F3] text-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-default"
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
