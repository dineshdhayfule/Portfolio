"use client"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { education } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
import Badge from "@/components/ui/badge"

export default function Education() {
    return (
        <ParallaxSection id="education" alternate>
            <SectionHeader title="Education" highlight="Journey" description="Academic milestones that shaped my fundamentals" />
            <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, i) => (
                    <GlassCard key={edu.degree} delay={i * 0.08}>
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-bold text-content-primary text-sm">{edu.degree}</h3>
                                <p className="text-accent-light text-sm font-medium">{edu.institution}</p>
                            </div>
                            <Badge variant={edu.status === "Pursuing" ? "success" : "default"}>{edu.status}</Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-content-muted mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                            {edu.grade && <span className="text-accent-light font-semibold">· {edu.grade}</span>}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-content-muted">
                            <GraduationCap size={14} className="text-accent-light" />
                            <span>{edu.status === "Pursuing" ? "Currently completing" : "Completed"}</span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </ParallaxSection>
    )
}
