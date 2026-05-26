"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function ParallaxSection({ children, id, className = "", speed = 0.15, alternate = false }: {
  children: ReactNode; id: string; className?: string; speed?: number; alternate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={ref} id={id} className={`relative py-20 md:py-24 overflow-hidden ${alternate ? "bg-[#F3F3F3]" : "bg-white"} ${className}`}>
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center mb-16 md:mb-20 flex flex-col items-center"
    >
      <h2 className="heading-h2 mb-4 text-black">
        {title} {highlight && <span className={colorMap[highlightColor]}>{highlight}</span>}
      </h2>
      {description && <p className="text-body text-gray-700 max-w-2xl mx-auto font-bold">{description}</p>}
    </motion.div>
  )
}
