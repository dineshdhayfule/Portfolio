"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { chatbotResponses } from "@/lib/data"

interface Msg { role: "user" | "bot"; text: string }

export default function AskPortfolio() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: "Hey! 👋 I'm Dinesh's portfolio assistant. Ask me about his skills, projects, experience, or anything else!" }])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const end = useRef<HTMLDivElement>(null)

  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }) }, [msgs])

  const findResponse = (q: string) => {
    const low = q.toLowerCase()
    for (const r of chatbotResponses) { if (r.keywords.some((k) => low.includes(k))) return r.answer }
    return "I'm not sure about that! Try asking about skills, projects, experience, education, or contact info. 😊"
  }

  const send = () => {
    if (!input.trim()) return
    const q = input.trim()
    setMsgs((p) => [...p, { role: "user", text: q }])
    setInput("")
    setTyping(true)
    setTimeout(() => { setMsgs((p) => [...p, { role: "bot", text: findResponse(q) }]); setTyping(false) }, 600 + Math.random() * 600)
  }

  return (
    <>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-secondary rounded-full flex items-center justify-center shadow-black/30 shadow-md transition-colors"
        aria-label="Ask my portfolio">
        {open ? <X size={22} className="text-black" /> : <MessageCircle size={22} className="text-black" />}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl max-h-[480px]">
            <div className="p-4 border-b border-[var(--border)] flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"><Bot size={16} className="text-accent-light" /></div>
              <div><h4 className="text-sm font-semibold text-content-primary">Ask My Portfolio</h4><p className="text-xs text-content-muted">AI-powered assistant</p></div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
              {msgs.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Bot size={12} className="text-accent-light" /></div>}
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-accent text-black rounded-br-sm" : "bg-bg-card text-content-secondary rounded-bl-sm border border-[var(--border)]"}`}>{m.text}</div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Bot size={12} className="text-accent-light" /></div>
                  <div className="bg-bg-card px-4 py-3 rounded-2xl rounded-bl-sm border border-[var(--border)]">
                    <div className="flex gap-1"><span className="w-2 h-2 bg-content-muted rounded-full animate-bounce" /><span className="w-2 h-2 bg-content-muted rounded-full animate-bounce [animation-delay:0.15s]" /><span className="w-2 h-2 bg-content-muted rounded-full animate-bounce [animation-delay:0.3s]" /></div>
                  </div>
                </div>
              )}
              <div ref={end} />
            </div>
            <div className="p-3 border-t border-[var(--border)]">
              <form onSubmit={(e) => { e.preventDefault(); send() }} className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about skills, projects..."
                  className="flex-1 bg-bg-card border border-[var(--border)] rounded-xl px-3 py-2 text-sm text-content-primary placeholder:text-content-muted focus:outline-none focus:border-accent/50 transition-colors" />
                <button type="submit" title="Send message" aria-label="Send message" className="p-2 bg-accent hover:bg-secondary rounded-xl text-black transition-colors"><Send size={16} /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
