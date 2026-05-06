"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"
import Badge from "./badge"
import Button from "./button"
import Image from "next/image"

interface Project { id: string; title: string; subtitle: string; problem: string; solution: string; impact: string; tech: string[]; github: string; live: string; stats: { label: string; value: string }[]; image: string; color: string; isBuilding?: boolean }

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border border-gray-200 shadow-soft-lg rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight mb-2">{project.title}</h3>
              <p className="text-foreground font-semibold uppercase tracking-widest bg-accentAlt/15 inline-block px-2 rounded-md border border-accentAlt/20">{project.subtitle}</p>
            </div>
            <button onClick={onClose} title="Close project details" aria-label="Close project details" className="p-2 border border-gray-200 bg-white hover:bg-surface rounded-md transition-colors"><X size={20} className="text-foreground" /></button>
          </div>
          <div className="relative w-full h-56 md:h-72 border border-gray-200 mb-8 overflow-hidden rounded-xl">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((s, i) => (
              <div key={s.label} className="bg-surface border border-gray-200 p-4 text-center shadow-soft-sm rounded-xl">
                <div className="text-2xl font-bold font-mono text-foreground">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-6 mb-8 bg-white border border-gray-200 p-6 shadow-soft-sm rounded-2xl">
            <div><h4 className="text-base font-bold uppercase tracking-wider text-foreground mb-2">The Problem</h4><p className="text-foreground leading-relaxed">{project.problem}</p></div>
            <div><h4 className="text-base font-bold uppercase tracking-wider text-foreground mb-2">The Solution</h4><p className="text-foreground leading-relaxed">{project.solution}</p></div>
            <div><h4 className="text-base font-bold uppercase tracking-wider text-foreground mb-2">The Impact</h4><p className="text-foreground leading-relaxed">{project.impact}</p></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">{project.tech.map((t) => <Badge key={t} variant="accent">{t}</Badge>)}</div>
          <div className="flex gap-4">
            {project.github && <Button href={project.github} variant="outline" size="lg"><Github size={20} /> Source Code</Button>}
            {project.live && <Button href={project.live} variant="primary" size="lg"><ExternalLink size={20} /> Live Demo</Button>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
