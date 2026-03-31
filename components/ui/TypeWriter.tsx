"use client"
import { useState, useEffect } from "react"

export default function TypeWriter({ words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000 }: { words: string[]; typingSpeed?: number; deletingSpeed?: number; pauseTime?: number }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(word.substring(0, text.length + 1))
        if (text === word) setTimeout(() => setIsDeleting(true), pauseTime)
      } else {
        setText(word.substring(0, text.length - 1))
        if (text === "") { setIsDeleting(false); setWordIndex((i) => (i + 1) % words.length) }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return <span className="text-accent-light">{text}<span className="animate-pulse ml-0.5 text-accent">|</span></span>
}
