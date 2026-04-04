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
          className="fixed bottom-6 left-6 z-40 w-16 h-16 bg-neo-secondary border-4 border-black text-black hover:bg-neo-accent btn-push shadow-neo-sm rounded-full flex items-center justify-center"
          aria-label="Scroll to top">
          <ArrowUp size={28} className="stroke-[3px]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
