"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function NeoCard({ children, className = "", hover = true, delay = 0, rotate = "0" }: { children: ReactNode; className?: string; hover?: boolean; delay?: number; rotate?: string }) {
  // Map rotate prop to null visually to preserve clean aesthetics
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`card-base p-6 md:p-8 ${hover ? "card-lift" : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}
