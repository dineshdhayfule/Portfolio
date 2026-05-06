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
          <h3 className="text-2xl font-extrabold uppercase text-foreground mx-auto shrink mb-8 flex items-center justify-center gap-3 bg-white border border-gray-200 p-4 shadow-soft-sm rounded-2xl w-fit"><Briefcase size={24} /> Work Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div key={exp.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white border border-gray-200 p-6 shadow-soft-sm rounded-2xl transition-transform cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                    <div><h4 className="font-extrabold text-xl uppercase text-foreground">{exp.role}</h4><p className="text-foreground font-semibold uppercase tracking-wider bg-surface inline-block px-2 border border-gray-200 mt-1 rounded-md">{exp.company}</p></div>
                    <Badge variant={exp.type === "internship" ? "accent" : "default"}>{exp.type === "internship" ? "Internship" : "Training"}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted mb-4"><span className="flex items-center gap-2"><Calendar size={16} /> {exp.period}</span><span>· {exp.duration}</span></div>
                  <p className="text-foreground font-medium mb-4">{exp.description}</p>
                  <ul className="space-y-2">{exp.highlights.map((h) => <li key={h} className="text-foreground font-medium text-sm flex items-start gap-2"><ChevronRight size={18} className="text-accent mt-0.5 flex-shrink-0" />{h}</li>)}</ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-2xl font-extrabold uppercase text-foreground mx-auto shrink mb-8 flex items-center justify-center gap-3 bg-white border border-gray-200 p-4 shadow-soft-sm rounded-2xl w-fit"><GraduationCap size={24} /> Education</h3>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative md:pl-12">
                  <div className="absolute left-[11px] top-6 w-3 h-3 bg-accent rounded-full hidden md:block" />
                  <div className="bg-white border border-gray-200 p-6 shadow-soft-sm rounded-2xl transition-transform">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                      <h4 className="font-extrabold text-xl uppercase text-foreground">{edu.degree}</h4>
                      <Badge variant={edu.status === "Pursuing" ? "success" : "default"}>{edu.status}</Badge>
                    </div>
                    <p className="text-foreground font-semibold uppercase tracking-wider bg-surface inline-block px-2 border border-gray-200 mb-3 rounded-md">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest text-black">
                      <span className="flex items-center gap-2"><Calendar size={16} /> {edu.period}</span>
                      {edu.grade && <span className="bg-white border border-gray-200 px-2 mt-1 sm:mt-0 rounded-md text-foreground">Grade: {edu.grade}</span>}
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
