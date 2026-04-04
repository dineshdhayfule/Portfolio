"use client"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react"
import { experience, education } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import Badge from "@/components/ui/badge"

export default function Experience() {
  return (
    <ParallaxSection id="experience">
      <SectionHeader title="Experience &" highlight="Education" description="My professional journey and academic background" />
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-black uppercase text-black mx-auto shrink mb-8 flex items-center justify-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000] rotate-1 w-fit"><Briefcase size={32} className="stroke-[3px]" /> Work Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div key={exp.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white border-4 border-black p-6 shadow-neo-md rotate-1 hover:-rotate-1 transition-transform cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                    <div><h4 className="font-black text-xl uppercase text-black">{exp.role}</h4><p className="text-black font-bold uppercase tracking-wider bg-neo-secondary inline-block px-2 border-2 border-black mt-1">{exp.company}</p></div>
                    <Badge variant={exp.type === "internship" ? "accent" : "default"}>{exp.type === "internship" ? "Internship" : "Training"}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black mb-4"><span className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</span><span>· {exp.duration}</span></div>
                  <p className="text-black font-bold mb-4">{exp.description}</p>
                  <ul className="space-y-2">{exp.highlights.map((h) => <li key={h} className="text-black font-bold text-sm flex items-start gap-2"><ChevronRight size={20} className="text-black stroke-[3px] mt-0.5 flex-shrink-0" />{h}</li>)}</ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-3xl font-black uppercase text-black mx-auto shrink mb-8 flex items-center justify-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000] -rotate-1 w-fit"><GraduationCap size={32} className="stroke-[3px]" /> Education</h3>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-0 w-1 bg-black hidden md:block" />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative md:pl-12">
                  <div className="absolute left-[10px] top-6 w-4 h-4 bg-neo-accent border-4 border-black hidden md:block rotate-45" />
                  <div className="bg-neo-bg border-4 border-black p-6 shadow-neo-md -rotate-1 hover:rotate-1 transition-transform">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                      <h4 className="font-black text-xl uppercase text-black">{edu.degree}</h4>
                      <Badge variant={edu.status === "Pursuing" ? "success" : "default"}>{edu.status}</Badge>
                    </div>
                    <p className="text-black font-bold uppercase tracking-wider bg-neo-secondary inline-block px-2 border-2 border-black mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest text-black">
                      <span className="flex items-center gap-2"><Calendar size={16} /> {edu.period}</span>
                      {edu.grade && <span className="bg-white border-2 border-black px-2 mt-1 sm:mt-0">Grade: {edu.grade}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
