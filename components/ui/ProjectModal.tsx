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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} title="Close project details" aria-label="Close project details" className="absolute top-6 right-6 p-2 rounded-xl bg-[#F3F3F3] border-[3px] border-black hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] btn-push"><X size={24} strokeWidth={3} className="text-black" /></button>
          
          <div className="mb-8 pr-12">
            <h3 className="text-3xl md:text-5xl font-black text-black leading-tight mb-2 uppercase">{project.title}</h3>
            <p className="text-[#2F81F7] font-bold text-xl uppercase">{project.subtitle}</p>
          </div>
          
          <div className="relative w-full h-56 md:h-72 border-[4px] border-black rounded-xl mb-8 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.stats.map((s, i) => (
              <div key={s.label} className="bg-white rounded-xl border-[4px] border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                <div className="text-3xl font-black text-black">{s.value}</div>
                <div className="text-xs font-bold uppercase text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6 mb-8 bg-[#F3F3F3] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 rounded-xl">
            <div><h4 className="text-xl font-black uppercase text-black mb-2">The Problem</h4><p className="text-black font-medium leading-relaxed">{project.problem}</p></div>
            <div><h4 className="text-xl font-black uppercase text-black mb-2">The Solution</h4><p className="text-black font-medium leading-relaxed">{project.solution}</p></div>
            <div><h4 className="text-xl font-black uppercase text-black mb-2">The Impact</h4><p className="text-black font-medium leading-relaxed">{project.impact}</p></div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 text-sm font-bold uppercase bg-white border-[3px] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {t}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.github && <Button href={project.github} variant="secondary" size="lg" className="w-full justify-center bg-white border-[4px] font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"><Github size={20} strokeWidth={3} className="mr-2" /> Source Code</Button>}
            {project.live && <Button href={project.live} variant="primary" size="lg" className="w-full justify-center bg-[#2F81F7] text-white border-[4px] font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black"><ExternalLink size={20} strokeWidth={3} className="mr-2" /> Live Demo</Button>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
