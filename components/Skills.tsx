"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Terminal } from "lucide-react"

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "Python", "Java", "PHP"],
    },
    {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
        category: "Tools",
        icon: Terminal,
        items: ["Git", "Docker", "VS Code", "Linux", "Postman"],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit that allows me to build robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                <skill.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-secondary/50 rounded-lg text-sm text-secondary-foreground border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
