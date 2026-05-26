"use client"
import { GraduationCap, Calendar } from "lucide-react"
import { education } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import Badge from "@/components/ui/badge"

export default function Education() {
    return (
        <ParallaxSection id="education" alternate>
            <SectionHeader title="Education" highlight="Journey" description="Academic milestones that shaped my fundamentals" highlightColor="blue" />
            <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, i) => (
                    <div key={edu.degree} className="card-base p-6 hover:-translate-y-1 transition-transform shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="font-bold text-lg text-black dark:text-white">{edu.degree}</h3>
                                <p className="text-[var(--accent)] font-semibold mt-1">{edu.institution}</p>
                            </div>
                            <Badge variant={edu.status === "Pursuing" ? "success" : "default"}>{edu.status}</Badge>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-[#717171] mb-4">
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {edu.period}</span>
                            {edu.grade && <span className="text-[#393939] dark:text-gray-300">· {edu.grade}</span>}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                            <GraduationCap size={18} strokeWidth={2.5} />
                            <span>{edu.status === "Pursuing" ? "Currently completing" : "Completed"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </ParallaxSection>
    )
}
