"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { navItems, personalInfo } from "@/lib/data"

const visibleNavItems = navItems.filter((item) =>
  ["Projects", "Skills", "Experience", "Contact"].includes(item.name)
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = visibleNavItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${section}`;
            break;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <div className="fixed top-0 w-full z-50 pt-6 px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center bg-white border-4 border-black rounded-full px-3 py-2 w-fit mx-auto shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-300 gap-4 md:gap-8">
        
        <motion.button 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("#hero")}
          className="text-xl font-bold text-white bg-[#2F81F7] w-10 h-10 flex items-center justify-center rounded-full border-[3px] border-black flex-shrink-0 transition-transform duration-200 ease-out">
          {personalInfo.name.charAt(0)}
        </motion.button>
        
        <div className="hidden lg:flex items-center gap-6">
          {visibleNavItems.map((item, i) => {
            const isActive = activeSection === item.href;
            return (
              <motion.button 
                key={item.name} 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.href)}
                className={`text-base font-black whitespace-nowrap uppercase tracking-wide transition-all duration-200 ease-out ${
                  isActive 
                    ? "text-black bg-[#FDB927] border-2 border-black rounded-full px-4 py-1" 
                    : "text-black hover:text-[#2F81F7]"
                }`}
              >
                {item.name}
              </motion.button>
            )
          })}
        </div>
        
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" 
             className="h-[36px] px-5 bg-black text-white rounded-full flex items-center gap-2 text-sm font-bold uppercase hover:bg-[#2F81F7] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200 ease-out">
            <FileText size={16} /> Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center flex-shrink-0">
          <button 
            onClick={() => setOpen(!open)} 
            className="w-[36px] h-[36px] flex items-center justify-center bg-black text-white rounded-full hover:bg-[#2F81F7] transition-colors duration-200 ease-out">
            {open ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden pointer-events-auto mt-4 mx-auto max-w-sm bg-white border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="p-4 space-y-2">
              {visibleNavItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button 
                    key={item.name} 
                    onClick={() => { scrollTo(item.href); setOpen(false); }} 
                    className={`block w-full text-center px-4 py-3 text-lg font-bold text-black rounded-lg transition-all duration-200 ease-out ${
                      isActive 
                        ? "bg-[#FDB927] border-2 border-black" 
                        : "border-2 border-transparent hover:text-[#2F81F7]"
                    }`}>
                    {item.name}
                  </button>
                )
              })}
              <div className="pt-2 pb-1 px-2">
                <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" 
                   className="w-full h-14 bg-black text-white border-4 border-black rounded-lg flex items-center justify-center gap-2 text-base font-bold uppercase tracking-wide hover:bg-[#2F81F7] hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200 ease-out">
                  <FileText size={20} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
