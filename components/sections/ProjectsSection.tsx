"use client"
import { useState } from "react"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"
import ProjectModal from "@/components/ui/ProjectModal"

const filters = ["All", "AI/ML", "Web", "Mobile"]
const filterMap: Record<string, string> = { All: "all", "AI/ML": "ai", Web: "web", Mobile: "mobile" }

export default function ProjectsSection() {
    const [filter, setFilter] = useState("All")
    const [selected, setSelected] = useState<(typeof projects)[0] | null>(null)

    const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filterMap[filter])

    return (
        <ParallaxSection id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-b-4 border-black">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-6 sm:gap-8">
                    <div>
                        <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-black">
                            SELECTED <br />
                            <span className="text-white [-webkit-text-stroke:2px_black] bg-[#2F81F7] px-3 sm:px-4 inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-3 sm:border-4 border-black">WORKS.</span>
                        </h2>
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 border-[3px] border-black rounded-full text-sm sm:text-base font-bold transition-all btn-push ${
                                    filter === f
                                        ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                        : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F3F3F3]"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {filtered.map((project, i) => (
                        <div
                            key={project.id}
                            className={`group bg-white border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col ${
                                i % 3 === 0 ? "lg:col-span-2 lg:flex-row" : ""
                            }`}
                        >
                            <div className={`relative overflow-hidden border-black cursor-pointer ${i % 3 === 0 ? "lg:w-1/2 border-b-3 sm:border-b-4 lg:border-b-0 lg:border-r-4 h-48 sm:h-56 md:h-64 lg:h-auto" : "h-48 sm:h-56 md:h-64 border-b-3 sm:border-b-4"}`} onClick={() => setSelected(project)}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black rounded-full border-[3px] border-black px-4 sm:px-6 py-2 sm:py-3 font-bold flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-90 group-hover:scale-100 duration-300 text-sm sm:text-base">
                                        View Case Study <ArrowUpRight size={18} strokeWidth={3} />
                                    </span>
                                </div>
                                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                                    {getProjectBadges(project.id).map((badge) => (
                                        <span key={badge} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black uppercase bg-[#FDB927] border-[2px] sm:border-[3px] border-black rounded-full text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={`p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-1 bg-white ${i % 3 === 0 ? "lg:w-1/2" : ""}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black leading-tight group-hover:underline decoration-4 underline-offset-4 cursor-pointer" onClick={() => setSelected(project)}>
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-1.5 sm:gap-2 shrink-0">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-[3px] border-black rounded-full bg-white hover:bg-black hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-push">
                                                    <Github size={18} strokeWidth={2.5} />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-[3px] border-black rounded-full bg-[#2F81F7] text-white hover:bg-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-push">
                                                    <ExternalLink size={18} strokeWidth={2.5} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-base sm:text-lg font-bold text-[#2F81F7] mb-3 sm:mb-4">{project.subtitle}</p>
                                    <p className="text-sm sm:text-base font-medium text-[#393939] mb-4 sm:mb-6 line-clamp-2">{project.problem}</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                    {project.tech.slice(0, 4).map((tech) => (
                                        <span key={tech} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase bg-white border-[2px] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase bg-black border-[2px] border-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </ParallaxSection>
    )
}

function getProjectBadges(id: string) {
    if (id === "health-bytes") return ["Featured", "Award Winning"]
    if (id === "disease-prediction") return ["AI/ML"]
    if (id === "healthcare-services") return ["Full Stack"]
    return []
}
