"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

export default function ParallaxSection({ children, id, className = "", speed = 0.15, alternate = false }: {
  children: ReactNode; id: string; className?: string; speed?: number; alternate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed])

  return (
    <section ref={ref} id={id} className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${alternate ? "bg-bg-secondary" : ""} ${className}`}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto relative z-10">
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({ title, highlight, description }: { title: string; highlight: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && <p className="text-content-secondary text-lg max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
