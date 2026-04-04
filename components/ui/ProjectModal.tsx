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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neo-bg/80" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none mb-2">{project.title}</h3>
              <p className="text-black font-bold uppercase tracking-widest bg-neo-secondary inline-block px-2 border-2 border-black -rotate-1">{project.subtitle}</p>
            </div>
            <button onClick={onClose} title="Close project details" aria-label="Close project details" className="p-2 border-4 border-black bg-white hover:bg-neo-accent btn-push transition-colors"><X size={24} className="text-black stroke-[3px]" /></button>
          </div>
          <div className="relative w-full h-56 md:h-72 border-4 border-black mb-8 overflow-hidden">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((s, i) => (
              <div key={s.label} className={`bg-neo-muted border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}>
                <div className="text-2xl font-black font-mono text-black">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-6 mb-8 bg-white border-4 border-black p-6 shadow-neo-md -rotate-1">
            <div><h4 className="text-lg font-black uppercase text-black mb-2">The Problem</h4><p className="text-black font-bold leading-relaxed">{project.problem}</p></div>
            <div><h4 className="text-lg font-black uppercase text-black mb-2">The Solution</h4><p className="text-black font-bold leading-relaxed">{project.solution}</p></div>
            <div><h4 className="text-lg font-black uppercase text-black mb-2">The Impact</h4><p className="text-black font-bold leading-relaxed">{project.impact}</p></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">{project.tech.map((t) => <Badge key={t} variant="accent">{t}</Badge>)}</div>
          <div className="flex gap-4">
            {project.github && <Button href={project.github} variant="secondary" size="lg" className="rotate-1"><Github size={20} className="stroke-[3px]" /> Source Code</Button>}
            {project.live && <Button href={project.live} variant="primary" size="lg" className="-rotate-1"><ExternalLink size={20} className="stroke-[3px]" /> Live Demo</Button>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
