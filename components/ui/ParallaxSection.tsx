"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

export default function ParallaxSection({ children, id, className = "", speed = 0.15, alternate = false }: {
  children: ReactNode; id: string; className?: string; speed?: number; alternate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} id={id} className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-200 ${alternate ? "bg-surface" : "bg-white"} ${className}`}>
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
      <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight leading-none inline-flex flex-wrap justify-center gap-4 text-foreground">
        <span>{title}</span>
        <span className="bg-accent text-white px-4 py-1 rounded-full border border-transparent shadow-soft-sm">{highlight}</span>
      </h2>
      {description && <p className="text-foreground font-semibold tracking-wide text-sm md:text-base max-w-2xl mx-auto bg-white border border-gray-200 px-6 py-3 shadow-soft-sm rounded-2xl">{description}</p>}
    </motion.div>
  )
}
