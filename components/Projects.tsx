"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Health Bites",
        description: "AI-powered health and nutrition platform providing personalized meal plans and tracking.",
        tags: ["Next.js", "Python", "AI/ML", "Tailwind"],
        github: "https://github.com/dineshdhayfule",
        demo: "#",
        image: "/placeholder.svg?height=400&width=600", // You might want to replace this with actual images later
    },
    {
        title: "E-Medico",
        description: "Comprehensive medical resource platform connecting patients with healthcare information.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
        github: "https://github.com/dineshdhayfule",
        demo: "#",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        title: "Prediction of Disease",
        description: "Machine learning models for early detection of various diseases using public datasets.",
        tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        github: "https://github.com/dineshdhayfule",
        demo: "#",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        title: "WeChat Clone",
        description: "Real-time messaging application with user authentication and media sharing capabilities.",
        tags: ["Android", "Java", "Firebase", "XML"],
        github: "https://github.com/dineshdhayfule",
        demo: "#",
        image: "/placeholder.svg?height=400&width=600",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my best work, ranging from web applications to machine learning models.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden bg-muted">
                                {/* Placeholder for project image - gradients for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                                    {project.title}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                            <Github size={20} />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                            <ExternalLink size={20} />
                                        </Button>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-background/50 rounded-full text-xs font-medium border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
