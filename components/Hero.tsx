"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        Available for hire
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        I'm Dinesh Dhayfule, a passionate software engineer crafting scalable solutions
                        with modern technologies. Specializing in full-stack development and AI integration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                            View Projects
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary/20 hover:bg-primary/5">
                            Contact Me
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6 text-muted-foreground">
                        <motion.a
                            href="https://github.com/dineshdhayfule"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: "#fff" }}
                            className="transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: "#0077b5" }}
                            className="transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:contact@example.com"
                            whileHover={{ scale: 1.1, color: "#ea4335" }}
                            className="transition-colors"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="text-muted-foreground" />
                </motion.div>
            </div>
        </section>
    )
}
