"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"
import { personalInfo } from "@/lib/data"
import Button from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-8 md:pt-28 md:pb-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="space-y-6">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black md:leading-[1.15] text-black tracking-tight">
            I'm <span className="bg-[#2F81F7] text-white px-2 py-1 relative inline-block mx-1 -rotate-1">{personalInfo.name}</span>, a Software Developer from <span className="bg-[#FDB927] text-black px-2 py-1 relative inline-block mx-1 rotate-1">{personalInfo.location}</span>
          </h1>
          
          <p className="text-[#393939] text-base md:text-lg font-bold leading-relaxed max-w-xl">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
            <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto text-base md:text-lg min-w-[160px] h-[56px] border-[3px]">
              <Mail className="w-5 h-5" /> Hire Me
            </Button>
            <Button href="#projects" variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg min-w-[160px] h-[56px] border-[3px] bg-white">
              <FileText className="w-5 h-5" /> View Projects
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            {[{ href: personalInfo.github, icon: Github, label: "GitHub" }, { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" }].map(({ href, icon: Icon, label }) => (
              <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                className="w-14 h-14 flex items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black transition-all btn-push">
                <Icon size={24} strokeWidth={2.5} />
              </a>
            ))}
          </div>

        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }} className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[280px] lg:max-w-[340px] aspect-square bg-[#FDB927] border-[4px] md:border-[6px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/my-pic.png" alt={personalInfo.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            {/* Fallback if avatar doesn't exist */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="text-[100px] md:text-[120px] font-black text-black opacity-20">{personalInfo.name.charAt(0)}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
