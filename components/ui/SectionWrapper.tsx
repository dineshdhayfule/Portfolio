"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function SectionWrapper({ id, children, className = "", alternate = false }: { id: string; children: ReactNode; className?: string; alternate?: boolean }) {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${alternate ? "bg-bg-secondary" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({ title, highlight, description }: { title: string; highlight: string; description?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && <p className="text-content-secondary text-lg max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
