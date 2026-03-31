"use client"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function AnimatedCounter({ end, suffix = "", duration = 2, label }: { end: number; suffix?: string; duration?: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start: number
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      setCount(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold font-mono text-accent-light">{count}{suffix}</div>
      <div className="text-sm text-content-muted mt-1">{label}</div>
    </div>
  )
}
