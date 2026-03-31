"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Frame {
  title: string
  description: string
  accent: string
}

const frames: Frame[] = [
  {
    title: "It started with curiosity",
    description: "A Diploma in IT. Late-night coding sessions. The moment I realized I could build anything with code — and I was hooked.",
    accent: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Then came the real projects",
    description: "A real-time chat app. An ML system that predicts diseases with 80–85% accuracy. An AI nutrition platform powered by Gemini. Each project taught me what the classroom couldn't.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "I shipped. I learned. I grew.",
    description: "From intern at BraveSoft building e-commerce features, to training on Core Java at Vikrama Technology — every experience sharpened my craft.",
    accent: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Today, I build production software",
    description: "Web apps, APIs, ML models — I bring ideas to life with clean code, modern tools, and a focus on solving real problems. Ready for what's next.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
]

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative" style={{ height: `${frames.length * 100}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Background gradient that shifts */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.33, 0.66, 1],
              [
                "radial-gradient(ellipse 80% 60% at 50% 50%, var(--accent-glow), transparent)",
                "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(59,130,246,0.08), transparent)",
                "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(16,185,129,0.08), transparent)",
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.08), transparent)",
              ]
            ),
          }}
        />

        {/* Progress line */}
        <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 h-48 w-px bg-[var(--border)] hidden md:block">
          <motion.div
            className="w-full bg-accent rounded-full origin-top"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />
        </div>

        {/* Frame counter */}
        <div className="absolute left-8 md:left-12 top-8 hidden md:block">
          {frames.map((_, i) => {
            const frameStart = i / frames.length
            const frameEnd = (i + 1) / frames.length
            return (
              <FrameDot key={i} index={i} scrollProgress={scrollYProgress} start={frameStart} end={frameEnd} />
            )
          })}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
          {frames.map((frame, i) => (
            <StoryFrame key={i} frame={frame} index={i} total={frames.length} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryFrame({ frame, index, total, scrollProgress }: { frame: Frame; index: number; total: number; scrollProgress: any }) {
  const segmentSize = 1 / total
  const start = index * segmentSize
  const peak = start + segmentSize * 0.5
  const end = start + segmentSize

  const opacity = useTransform(scrollProgress, [start, start + segmentSize * 0.2, peak, end - segmentSize * 0.15, end], [0, 1, 1, 1, 0])
  const y = useTransform(scrollProgress, [start, start + segmentSize * 0.2, peak, end - segmentSize * 0.15, end], [60, 0, 0, 0, -40])
  const scale = useTransform(scrollProgress, [start, start + segmentSize * 0.2, end - segmentSize * 0.15, end], [0.95, 1, 1, 0.98])

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center px-4" style={{ opacity, y, scale }}>
      <div className="text-center max-w-2xl">
        <motion.span className="inline-block text-sm font-mono text-accent-light mb-4 tracking-wider uppercase">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </motion.span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6 leading-tight">
          {frame.title}
        </h2>
        <p className="text-lg md:text-xl text-content-secondary leading-relaxed max-w-xl mx-auto">
          {frame.description}
        </p>
        <div className={`mt-8 w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${frame.accent}`} />
      </div>
    </motion.div>
  )
}

function FrameDot({ index, scrollProgress, start, end }: { index: number; scrollProgress: any; start: number; end: number }) {
  const isActive = useTransform(scrollProgress, (v: number) => (v >= start && v < end) ? 1 : 0.3)
  const dotScale = useTransform(scrollProgress, (v: number) => (v >= start && v < end) ? 1.4 : 1)

  return (
    <motion.div
      className="w-2 h-2 rounded-full bg-accent mb-3"
      style={{ opacity: isActive, scale: dotScale }}
    />
  )
}
