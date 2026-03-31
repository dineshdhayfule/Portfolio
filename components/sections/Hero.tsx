"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ChevronDown, MapPin } from "lucide-react"
import { personalInfo, stats } from "@/lib/data"
import TypeWriter from "@/components/ui/TypeWriter"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/badge"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      <motion.div className="absolute inset-0 hero-gradient" style={{ y: bgY }} />

      <div className="absolute inset-0 opacity-[0.015] hero-grid" />

      <motion.div className="max-w-4xl mx-auto text-center relative z-10" style={{ opacity: contentOpacity, y: contentY }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge variant="success" className="mb-4 px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            {personalInfo.status}
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-3 leading-tight">
            Dinesh <span className="text-accent">Dhayfule</span>
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-content-secondary mb-2 leading-relaxed">{personalInfo.tagline}</h2>
          <div className="text-lg md:text-xl text-content-primary font-medium mb-2 h-8">
            I build <TypeWriter words={personalInfo.roles} />
          </div>
          <p className="text-content-secondary text-sm mb-1">Actively looking for Software Developer opportunities</p>
          <p className="text-content-muted text-sm flex items-center justify-center gap-1 mb-8"><MapPin size={14} /> {personalInfo.location}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button href="#contact" variant="primary" size="lg" className="!text-black [&_svg]:!text-black">Hire Me</Button>
          <Button href="#projects" variant="secondary" size="lg">View Projects</Button>
          <Button href={personalInfo.resume} variant="outline" size="lg"><FileText size={16} /> Resume</Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center gap-4 mb-12">
          {[{ href: personalInfo.github, icon: Github, label: "GitHub" }, { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" }, { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" }].map(({ href, icon: Icon, label }) => (
            <motion.a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="p-3 rounded-xl bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] text-content-muted hover:text-secondary ui-hover">
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((s) => <AnimatedCounter key={s.label} end={s.value} suffix={s.suffix} label={s.label} />)}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="mx-auto text-content-muted" size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
