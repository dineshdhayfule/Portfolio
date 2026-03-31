"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function StickyCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] rounded-full flex items-center justify-center shadow-lg transition-colors"
          aria-label="Scroll to top">
          <ArrowUp size={18} className="text-content-secondary" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
