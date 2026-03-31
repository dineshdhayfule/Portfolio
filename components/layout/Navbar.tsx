"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { navItems, personalInfo } from "@/lib/data"
import Button from "@/components/ui/Button"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass border-b border-[var(--border)]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => scrollTo("#hero")}
          className="text-xl font-semibold text-content-primary">
          {personalInfo.name.split(" ")[0]}<span className="text-content-primary">.dev</span>
        </motion.button>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.button key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => scrollTo(item.href)}
              className="px-4 py-2 text-sm font-medium text-content-secondary hover:text-content-primary transition-colors rounded-lg hover:bg-bg-card">
              {item.name}
            </motion.button>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button href={personalInfo.resume} variant="secondary" size="sm"><FileText size={14} /> Resume</Button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="p-2 text-content-primary">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass border-t border-[var(--border)]">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <button key={item.name} onClick={() => scrollTo(item.href)} className="block w-full text-left px-4 py-3 text-content-secondary hover:text-content-primary hover:bg-bg-card rounded-lg transition-colors">{item.name}</button>
            ))}
            <Button href={personalInfo.resume} variant="secondary" size="sm" className="w-full mt-2"><FileText size={14} /> Resume</Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
