"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsOpen(false)
        }
    }

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
                >
                    Dinesh<span className="text-foreground">.dev</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => scrollToSection(item.href)}
                            className="text-sm font-medium hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </motion.button>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                            Resume
                        </Button>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-white/10"
                >
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-left py-2 hover:text-primary transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
