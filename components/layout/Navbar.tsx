"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { navItems, personalInfo } from "@/lib/data"
import Button from "@/components/ui/button"

const visibleNavItems = navItems.filter((item) =>
  ["Projects", "Skills", "Experience", "Contact"].includes(item.name)
)

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
    <div className="fixed top-0 w-full z-50 pt-6 px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center bg-white border-4 border-black rounded-full px-3 py-2 w-fit mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 gap-4 md:gap-8">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => scrollTo("#hero")}
          className="text-xl font-bold text-black bg-black text-white w-10 h-10 flex items-center justify-center rounded-full border-[3px] border-black flex-shrink-0 relative overflow-hidden group">
          <span className="relative z-10 group-hover:text-black transition-colors">{personalInfo.name.charAt(0)}</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </motion.button>
        
        <div className="hidden lg:flex items-center gap-6">
          {visibleNavItems.map((item, i) => (
            <motion.button key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => scrollTo(item.href)}
              className="text-base font-black text-black hover:opacity-70 transition-opacity whitespace-nowrap uppercase tracking-wide">
              {item.name}
            </motion.button>
          ))}
        </div>
        
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="h-[36px] px-5 bg-black text-white rounded-full flex items-center gap-2 text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
            <FileText size={16} /> Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center flex-shrink-0">
          <button onClick={() => setOpen(!open)} className="w-[36px] h-[36px] flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors">{open ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}</button>
        </div>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden pointer-events-auto mt-4 mx-auto max-w-sm bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="p-4 space-y-2">
            {visibleNavItems.map((item) => (
              <button key={item.name} onClick={() => { scrollTo(item.href); setOpen(false); }} className="block w-full text-center px-4 py-3 text-lg font-bold text-black hover:bg-gray-100 transition-colors rounded-lg">{item.name}</button>
            ))}
            <div className="pt-2 pb-1 px-2">
              <Button href={personalInfo.resume} variant="primary" className="w-full h-14 text-base border-4"><FileText size={20} /> Resume</Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
