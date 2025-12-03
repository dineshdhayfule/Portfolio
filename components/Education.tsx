"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "NK Orchid College of Engineering and Technology",
        period: "2023 – 2026",
        status: "Pursuing",
        description: "Focusing on advanced algorithms, data structures, and software engineering principles.",
    },
    {
        degree: "Diploma in Information Technology",
        institution: "Government Polytechnic Solapur",
        period: "2020 – 2023",
        status: "Completed",
        description: "Graduated with distinction. Built strong foundation in programming and web technologies.",
    },
    {
        degree: "Secondary School Certificate",
        institution: "SVCS High School, Solapur",
        period: "2019 – 2020",
        status: "Completed",
        description: "Completed secondary education with focus on science and mathematics.",
    },
]

export default function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Academic <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/20"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]" />

                            <div className="glass-card p-6 rounded-2xl ml-4 hover:bg-white/5 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                                    <div className="flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {item.period}
                                    </div>
                                </div>

                                <div className="flex items-center text-lg font-medium mb-3">
                                    <GraduationCap size={20} className="mr-2 text-purple-400" />
                                    {item.institution}
                                </div>

                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
