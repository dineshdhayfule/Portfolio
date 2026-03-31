"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { projects } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import Badge from "@/components/ui/badge"
import ProjectModal from "@/components/ui/ProjectModal"

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

            <div className="flex justify-center gap-2 mb-10">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium ui-hover ${filter === f
                                ? "bg-secondary/14 text-secondary border border-secondary/40"
                                : "bg-bg-card text-content-secondary border border-[var(--border)] hover:bg-bg-card-hover"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelected(project)}
                        className="glass rounded-xl overflow-hidden cursor-pointer group ui-hover"
                    >
                        <div className="relative h-44 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium flex items-center gap-1">
                                    View Details <ArrowUpRight size={14} />
                                </span>
                            </div>

                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                {getProjectBadges(project.id).map((badge) => (
                                    <span
                                        key={badge}
                                        className="px-2 py-1 text-[11px] font-semibold rounded-full bg-zinc-900/70 border border-zinc-700 text-zinc-100 backdrop-blur"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 space-y-4">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-content-primary group-hover:text-secondary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-content-muted">{project.subtitle}</p>
                                </div>

                                <div className="flex gap-1.5">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            title={`${project.title} source code`}
                                            aria-label={`${project.title} source code`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-1.5 rounded-lg hover:bg-bg-card text-content-muted hover:text-secondary transition-colors"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            title={`${project.title} live demo`}
                                            aria-label={`${project.title} live demo`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-1.5 rounded-lg hover:bg-bg-card text-content-muted hover:text-secondary transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2 text-sm">
                                <CaseLine label="Problem" value={project.problem} />
                                <CaseLine label="Solution" value={project.solution} />
                                <CaseLine label="Impact" value={project.impact} />
                            </div>

                            <div className="flex flex-wrap gap-1.5">
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
                    </motion.div>
                ))}
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </ParallaxSection>
    )
}

function CaseLine({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start gap-2 text-content-secondary leading-6">
            <span className="text-xs font-semibold text-content-muted uppercase tracking-wide w-16">
                {label}
            </span>
            <span className="flex-1 text-content-primary/90">{value}</span>
        </div>
    )
}

function getProjectBadges(id: string) {
    if (id === "health-bytes") return ["Featured", "AI Project", "Best Project"]
    if (id === "disease-prediction") return ["AI Project"]
    if (id === "healthcare-services") return ["Java Project"]
    return []
}
