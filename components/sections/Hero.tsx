"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"
import TypeWriter from "@/components/ui/TypeWriter"
import Button from "@/components/ui/button"
import Badge from "@/components/ui/badge"


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden bg-white dark:bg-gray-900">

      {/* Decorative floaters */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 12, delay: 0.2 }}
        className="absolute top-32 left-10 hidden lg:flex w-24 h-24 bg-accent/20 rounded-full shadow-soft-md z-0" />
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 12, delay: 0.4 }}
        className="absolute top-[60%] right-10 lg:right-20 hidden md:flex w-28 h-28 lg:w-32 lg:h-32 bg-accentAlt/10 rounded-xl z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 20 }}>
          <div className="flex justify-center mb-8">
            <Badge variant="success" className="px-6 py-2 text-sm shadow-soft-sm">
              <span className="w-3 h-3 bg-black rounded-full mr-2 animate-pulse" />
              {personalInfo.status}
            </Badge>
          </div>

          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground dark:text-white mb-2">
              Dinesh Dhayfule
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{personalInfo.tagline}</h2>

          <div className="text-xl md:text-3xl text-black font-black mb-4 h-12 uppercase">
            I BUILD <TypeWriter words={personalInfo.roles} />
          </div>

          <p className="text-sm font-medium flex items-center justify-center gap-2 mb-6 mx-auto text-gray-600 dark:text-gray-300">
            <MapPin size={20} className="stroke-[2px]" /> {personalInfo.location}
          </p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full max-w-md sm:max-w-none mx-auto">
          <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">Hire Me</Button>
          <Button href="#projects" variant="secondary" size="lg" className="w-full sm:w-auto">View Projects</Button>
          <Button href={personalInfo.resume} variant="outline" size="lg" className="w-full sm:w-auto"><FileText size={20} className="stroke-[3px]" /> Resume</Button>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring" }} className="flex justify-center gap-6 mb-10 w-full relative z-10">
          {[{ href: personalInfo.github, icon: Github, label: "GitHub" }, { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" }, { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" }].map(({ href, icon: Icon, label }) => (
            <motion.a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
              className={`p-3 rounded-md border border-gray-200 text-foreground hover:shadow-soft-md bg-white/80`}>
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>



        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-16 flex justify-center">
          <div className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-soft-sm flex items-center justify-center">
            <ArrowDown className="text-foreground" size={28} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
