"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

export default function ParallaxSection({ children, id, className = "", speed = 0.15, alternate = false }: {
  children: ReactNode; id: string; className?: string; speed?: number; alternate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={ref} id={id} className={`relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t-8 border-black ${alternate ? "bg-neo-muted" : "bg-neo-bg"} ${className}`}>
      <motion.div className="max-w-6xl mx-auto relative z-10">
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({ title, highlight, description }: { title: string; highlight: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="text-center mb-16 flex flex-col items-center"
    >
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter leading-none inline-flex flex-wrap justify-center gap-4">
        <span className="text-black">{title}</span> 
        <span className="bg-neo-accent text-white px-4 py-1 border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-2 transform">{highlight}</span>
      </h2>
      {description && <p className="text-black font-bold uppercase tracking-widest text-lg md:text-xl max-w-2xl mx-auto bg-white border-4 border-black px-6 py-3 shadow-[4px_4px_0px_0px_#000] -rotate-1">{description}</p>}
    </motion.div>
  )
}
