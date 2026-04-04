"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { projects } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import Badge from "@/components/ui/badge"
import ProjectModal from "@/components/ui/ProjectModal"
import NeoCard from "@/components/ui/NeoCard"

const filters = ["All", "AI/ML", "Web", "Mobile"]

const filterMap: Record<string, string> = {
    All: "all",
    "AI/ML": "ai",
    Web: "web",
    Mobile: "mobile",
}

export default function ProjectsSection() {
    const [filter, setFilter] = useState("All")
    const [selected, setSelected] = useState<(typeof projects)[0] | null>(null)

    const filtered =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filterMap[filter])

    return (
        <ParallaxSection id="projects" speed={0.08}>
            <SectionHeader
                title="Featured"
                highlight="Projects"
                description="Real-world projects with measurable impact"
            />

            <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-3 border-4 border-black text-sm font-black tracking-widest uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${filter === f
                                ? "bg-neo-accent text-white"
                                : "bg-white text-black hover:bg-neo-secondary"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {filtered.map((project, i) => (
                    <NeoCard
                        key={project.id}
                        delay={i * 0.08}
                        className="cursor-pointer group hover:-rotate-1"
                    >
                        <div className="relative h-64 overflow-hidden border-b-4 border-black" onClick={() => setSelected(project)}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neo-accent text-white border-4 border-black px-4 py-2 font-black uppercase flex items-center gap-2 shadow-neo-sm">
                                    View Details <ArrowUpRight size={20} className="stroke-[3px]" />
                                </span>
                            </div>

                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                {getProjectBadges(project.id).map((badge) => (
                                    <span
                                        key={badge}
                                        className="px-3 py-1 text-xs font-black uppercase tracking-widest bg-neo-secondary border-4 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-2"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-0 border-t-0 space-y-4" onClick={() => setSelected(project)}>
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mt-4">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-neo-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-bold uppercase tracking-wider text-black/70 bg-white inline-block px-2 -rotate-1 border-2 border-black">{project.subtitle}</p>
                                </div>

                                <div className="flex gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            title="Source code"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 border-4 border-black bg-white hover:bg-neo-secondary text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                        >
                                            <Github size={20} className="stroke-[3px]" />
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            title="Live demo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 border-4 border-black bg-neo-accent text-white hover:bg-white hover:text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                        >
                                            <ExternalLink size={20} className="stroke-[3px]" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2 text-sm bg-neo-bg border-4 border-black p-4 rotate-1">
                                <CaseLine label="Problem" value={project.problem} />
                                <CaseLine label="Solution" value={project.solution} />
                                <CaseLine label="Impact" value={project.impact} />
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.slice(0, 5).map((tech) => (
                                    <Badge key={tech} variant="accent">
                                        {tech}
                                    </Badge>
                                ))}
                                {project.tech.length > 5 && (
                                    <Badge variant="outline">+{project.tech.length - 5}</Badge>
                                )}
                            </div>
                        </div>
                    </NeoCard>
                ))}
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </ParallaxSection>
    )
}

function CaseLine({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 leading-6">
            <span className="text-xs font-black text-black uppercase tracking-wider w-16 mt-1 bg-white border-2 border-black px-1 -rotate-1 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                {label}
            </span>
            <span className="flex-1 text-black font-bold uppercase tracking-wide text-sm">{value}</span>
        </div>
    )
}

function getProjectBadges(id: string) {
    if (id === "health-bytes") return ["Featured", "AI Project", "Best Project"]
    if (id === "disease-prediction") return ["AI Project"]
    if (id === "healthcare-services") return ["Java Project"]
    return []
}
