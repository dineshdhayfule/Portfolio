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
          <h3 className="text-xl font-bold text-content-primary mb-6 flex items-center gap-2"><Briefcase size={20} className="text-accent-light" /> Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div key={exp.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 ui-hover">
                <div className="flex items-start justify-between mb-2">
                  <div><h4 className="font-bold text-content-primary">{exp.role}</h4><p className="text-accent-light text-sm font-medium">{exp.company}</p></div>
                  <Badge variant={exp.type === "internship" ? "accent" : "default"}>{exp.type === "internship" ? "Internship" : "Training"}</Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-content-muted mb-3"><span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span><span>· {exp.duration}</span></div>
                <p className="text-content-secondary text-sm mb-3">{exp.description}</p>
                <ul className="space-y-1">{exp.highlights.map((h) => <li key={h} className="text-content-muted text-sm flex items-start gap-2"><ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />{h}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold text-content-primary mb-6 flex items-center gap-2"><GraduationCap size={20} className="text-accent-light" /> Education</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/20" />
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative pl-10">
                  <div className="absolute left-[10px] top-2 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary" />
                  <div className="glass rounded-xl p-5 ui-hover">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-content-primary text-sm">{edu.degree}</h4>
                      <Badge variant={edu.status === "Pursuing" ? "success" : "default"}>{edu.status}</Badge>
                    </div>
                    <p className="text-accent-light text-sm font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-xs text-content-muted">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                      {edu.grade && <span className="text-accent-light font-semibold">· {edu.grade}</span>}
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
