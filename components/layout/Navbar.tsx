"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { navItems, personalInfo } from "@/lib/data"
import Button from "@/components/ui/button"

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => scrollTo("#hero")}
          className="text-3xl font-black uppercase tracking-tighter text-black [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]">
          {personalInfo.name.split(" ")[0]}<span className="text-neo-accent">.DEV</span>
        </motion.button>
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.button key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => scrollTo(item.href)}
              className="px-4 py-2 text-[15px] font-black uppercase tracking-widest text-black border-2 border-transparent hover:border-black hover:bg-neo-secondary transition-colors btn-push [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]">
              {item.name}
            </motion.button>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button href={personalInfo.resume} variant="secondary" size="sm"><FileText size={14} /> Resume</Button>
          </div>
        </div>
        <div className="xl:hidden flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="p-2 border-4 border-black bg-neo-secondary text-black btn-push">{open ? <X size={22} className="stroke-[3px]" /> : <Menu size={22} className="stroke-[3px]" />}</button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="xl:hidden bg-white border-b-4 border-black">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <button key={item.name} onClick={() => scrollTo(item.href)} className="block w-full text-left px-4 py-3 min-h-[48px] text-base font-black uppercase tracking-widest text-black hover:bg-neo-secondary hover:border-2 border-transparent hover:border-black transition-colors">{item.name}</button>
            ))}
            <Button href={personalInfo.resume} variant="secondary" size="sm" className="w-full mt-2"><FileText size={14} /> Resume</Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
