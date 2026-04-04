"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function NeoCard({ children, className = "", hover = true, delay = 0, rotate = "0" }: { children: ReactNode; className?: string; hover?: boolean; delay?: number; rotate?: string }) {
  // Neo-brutalist interaction: fast, spring-based mechanical feel instead of soft ease
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
      whileHover={hover ? { y: -8, boxShadow: "12px 12px 0px 0px #000" } : undefined}
      className={`bg-white border-4 border-black p-6 shadow-neo-md transition-shadow duration-200 ${rotate !== "0" ? `rotate-${rotate}` : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}
