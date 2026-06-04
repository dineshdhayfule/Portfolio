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
        <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-[#0a0a0a] border-[3px] border-black dark:border-[#383838] text-black dark:text-white hover:-translate-y-1 shadow-subtle dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] rounded-full flex items-center justify-center transition-transform"
          aria-label="Scroll to top">
          <ArrowUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
