"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} className="text-content-secondary" /> : <Moon size={18} className="text-content-secondary" />}
    </motion.button>
  )
}
