"use client"
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { experience, education } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"

export default function Experience() {
  return (
    <ParallaxSection id="experience" className="!bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-white">
        <div className="mb-16">
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-white inline-block relative">
            MY
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-white"></span>
          </h2>
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:2px_white] mt-2">
            JOURNEY
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-10 bg-[#2F81F7] border-4 border-white p-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] w-fit rotate-[-2deg]">
              <Briefcase size={32} className="text-white" strokeWidth={3} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Experience</h3>
            </div>
            
            <div className="relative border-l-[6px] border-white ml-6 pl-10 space-y-12 pb-8">
              {experience.map((exp, i) => (
                <div key={exp.role} className="relative group">
                  <div className="absolute -left-[54px] top-4 w-6 h-6 bg-[#2F81F7] border-[4px] border-white rounded-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform" />
                  
                  <div className="bg-white border-4 border-white p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transition-all duration-200">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h4 className="font-black text-2xl text-black uppercase">{exp.role}</h4>
                        <p className="text-xl font-bold text-[#2F81F7] mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                        <span className="px-3 py-1 bg-[#FDB927] border-[3px] border-black text-black text-sm font-black uppercase rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {exp.period}
                        </span>
                        <span className="text-sm font-bold text-gray-500 uppercase">{exp.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-medium text-black mb-6">{exp.description}</p>
                    
                    <div className="space-y-3">
                      {exp.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <ArrowRight size={20} className="text-[#2F81F7] shrink-0 mt-1" strokeWidth={3} />
                          <p className="text-base font-bold text-gray-800">{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-10 bg-[#2F81F7] border-4 border-white p-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] w-fit rotate-[2deg]">
              <GraduationCap size={32} className="text-white" strokeWidth={3} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Education</h3>
            </div>
            
            <div className="relative border-l-[6px] border-white ml-6 pl-10 space-y-12 pb-8">
              {education.map((edu, i) => (
                <div key={edu.degree} className="relative group">
                  <div className="absolute -left-[54px] top-4 w-6 h-6 bg-[#6366F1] border-[4px] border-white rounded-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform" />
                  
                  <div className="bg-white border-4 border-white p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transition-all duration-200">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="font-black text-2xl text-black uppercase leading-tight">{edu.degree}</h4>
                        <p className="text-lg font-bold text-[#6366F1] mt-2">{edu.institution}</p>
                      </div>
                      <span className={`px-3 py-1 border-[3px] border-black text-black text-sm font-black uppercase rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] h-fit ${edu.status === 'Pursuing' ? 'bg-[#22c55e]' : 'bg-[#F3F3F3]'}`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t-4 border-black border-dashed">
                      <div className="flex items-center gap-2 bg-[#F3F3F3] px-3 py-1.5 border-[2px] border-black text-black text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {edu.period}
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2 bg-[#FDB927] px-3 py-1.5 border-[2px] border-black text-black text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                          Grade: {edu.grade}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
