"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function GlassCard({ children, className = "", hover = true, delay = 0 }: { children: ReactNode; className?: string; hover?: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`card-featured p-6 md:p-8 ${hover ? "card-lift" : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}
