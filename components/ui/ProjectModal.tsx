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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
          className="glass rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-content-primary">{project.title}</h3>
              <p className="text-content-muted text-sm mt-1">{project.subtitle}</p>
            </div>
            <button onClick={onClose} title="Close project details" aria-label="Close project details" className="p-2 hover:bg-bg-card rounded-xl transition-colors"><X size={20} className="text-content-muted" /></button>
          </div>
          <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-bg-card rounded-xl p-3 text-center border border-[var(--border)]">
                <div className="text-lg font-bold font-mono text-accent-light">{s.value}</div>
                <div className="text-xs text-content-muted">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4 mb-6">
            <div><h4 className="text-sm font-semibold text-accent-light mb-1">The Problem</h4><p className="text-content-secondary text-sm leading-relaxed">{project.problem}</p></div>
            <div><h4 className="text-sm font-semibold text-accent-light mb-1">The Solution</h4><p className="text-content-secondary text-sm leading-relaxed">{project.solution}</p></div>
            <div><h4 className="text-sm font-semibold text-accent-light mb-1">The Impact</h4><p className="text-content-secondary text-sm leading-relaxed">{project.impact}</p></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">{project.tech.map((t) => <Badge key={t} variant="accent">{t}</Badge>)}</div>
          <div className="flex gap-3">
            {project.github && <Button href={project.github} variant="secondary" size="sm"><Github size={16} /> Source Code</Button>}
            {project.live && <Button href={project.live} variant="primary" size="sm"><ExternalLink size={16} /> Live Demo</Button>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
