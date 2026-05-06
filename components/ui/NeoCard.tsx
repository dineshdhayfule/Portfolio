"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function NeoCard({ children, className = "", hover = true, delay = 0, rotate = "0" }: { children: ReactNode; className?: string; hover?: boolean; delay?: number; rotate?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 220, damping: 24, delay }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`bg-white border border-gray-200 p-6 shadow-soft-sm rounded-2xl transition-shadow duration-200 ${rotate !== "0" ? `rotate-${rotate}` : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}
