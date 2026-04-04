"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin } from "lucide-react"
import { personalInfo, stats } from "@/lib/data"
import TypeWriter from "@/components/ui/TypeWriter"
import Button from "@/components/ui/button"
import Badge from "@/components/ui/badge"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden bg-halftone">
      
      {/* Decorative floaters */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 12, delay: 0.2 }}
         className="absolute top-24 left-10 hidden lg:flex w-24 h-24 bg-neo-accent border-4 border-black rounded-full shadow-neo-md" />
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 12, delay: 0.4 }}
         className="absolute bottom-32 right-12 hidden lg:flex w-32 h-32 bg-neo-secondary border-4 border-black shadow-neo-md rotate-12" />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 20 }}>
          <div className="flex justify-center mb-8 rotate-3">
            <Badge variant="success" className="px-6 py-2 text-sm shadow-neo-md">
              <span className="w-3 h-3 bg-black rounded-full mr-2 animate-pulse" />
              {personalInfo.status}
            </Badge>
          </div>
          
          <div className="relative inline-block mb-6 -rotate-1">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black relative z-10 break-words">
              Dinesh <br className="sm:hidden"/> 
              <span className="inline-block bg-neo-secondary px-2 border-4 border-black shadow-neo-sm transform rotate-2">Dhayfule</span>
            </h1>
            {/* Background text stroke for depth */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none absolute top-2 left-2 text-transparent text-stroke-black z-0 pointer-events-none break-words">
              Dinesh <br className="sm:hidden"/> Dhayfule
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 uppercase tracking-wider bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-1">
            {personalInfo.tagline}
          </h2>
          
          <div className="text-xl md:text-3xl text-black font-black mb-4 h-12 uppercase">
            I BUILD <TypeWriter words={personalInfo.roles} />
          </div>
          
          <p className="text-black font-bold text-sm flex items-center justify-center gap-2 mb-10 w-fit mx-auto bg-neo-muted px-4 py-2 border-4 border-black -rotate-1 shadow-[4px_4px_0px_0px_#000]">
            <MapPin size={20} className="stroke-[3px]" /> {personalInfo.location}
          </p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full max-w-md sm:max-w-none mx-auto">
          <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto rotate-1">Hire Me</Button>
          <Button href="#projects" variant="secondary" size="lg" className="w-full sm:w-auto -rotate-1">View Projects</Button>
          <Button href={personalInfo.resume} variant="outline" size="lg" className="w-full sm:w-auto"><FileText size={20} className="stroke-[3px]" /> Resume</Button>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring" }} className="flex justify-center gap-6 mb-16">
          {[{ href: personalInfo.github, icon: Github, label: "GitHub", rotate: "rotate-3", color: "bg-neo-secondary" }, { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", rotate: "-rotate-2", color: "bg-neo-accent" }, { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", rotate: "rotate-1", color: "bg-neo-muted" }].map(({ href, icon: Icon, label, rotate, color }) => (
            <motion.a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
              className={`p-4 rounded-none border-4 border-black text-black hover:opacity-90 btn-push ${rotate} ${color} shadow-neo-sm`}>
              <Icon size={24} className="stroke-[3px]" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, type: "spring" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
             <div key={s.label} className={`bg-white border-4 border-black p-4 shadow-neo-md ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform`}>
                 <AnimatedCounter end={s.value} suffix={s.suffix} label={s.label} />
             </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-16 flex justify-center">
          <div className="w-16 h-16 bg-white border-4 border-black rounded-full shadow-neo-sm flex items-center justify-center animate-bounce">
            <ArrowDown className="text-black stroke-[3px]" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
