"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function SectionWrapper({ id, children, className = "", alternate = false }: { id: string; children: ReactNode; className?: string; alternate?: boolean }) {
  return (
    <section id={id} className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${alternate ? "bg-[#fafafa] dark:bg-[#191919]" : ""} ${className}`}>
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

export function SectionHeader({ title, highlight, description, highlightColor = "yellow" }: { title: string; highlight?: string; description?: string; highlightColor?: "yellow" | "red" | "blue" | "purple" }) {
  const colorMap = {
    yellow: "highlight-yellow",
    red: "highlight-red",
    blue: "highlight-blue",
    purple: "highlight-purple",
  }
  return (
    <div className="text-center mb-16 md:mb-20">
      <h2 className="heading-h2 mb-4">
        {title} {highlight && <span className={colorMap[highlightColor]}>{highlight}</span>}
      </h2>
      {description && <p className="text-body text-[#717171] max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
