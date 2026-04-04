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
      <motion.button whileHover={{ y: -4, boxShadow: "4px 4px 0px 0px #000" }} whileTap={{ y: 0, boxShadow: "0px 0px 0px 0px #000" }} onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-neo-accent border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none flex items-center justify-center transition-all"
        aria-label="Ask my portfolio">
        {open ? <X size={28} className="stroke-[3px]" /> : <MessageCircle size={28} className="stroke-[3px]" />}
      </motion.button>
      <AnimatePresence>
        {open && (
        <motion.div initial={{ opacity: 0, y: 20, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 20, rotate: 2 }}
            className="fixed bottom-28 right-6 z-50 w-[340px] sm:w-[380px] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden flex flex-col max-h-[480px]">
            <div className="p-4 bg-neo-secondary border-b-4 border-black flex items-center gap-3">
              <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center"><Bot size={24} className="stroke-[2px] text-black" /></div>
              <div><h4 className="text-lg font-black uppercase tracking-wider text-black">Ask Portfolio</h4><p className="text-sm font-bold text-black/70 uppercase">AI-powered assistant</p></div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
              {msgs.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && <div className="w-8 h-8 bg-neo-secondary border-2 border-black flex items-center justify-center flex-shrink-0 mt-1"><Bot size={16} className="text-black" /></div>}
                  <div className={`max-w-[80%] px-4 py-3 font-bold border-2 border-black text-sm leading-relaxed shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${m.role === "user" ? "bg-neo-accent text-white" : "bg-white text-black"}`}>{m.text}</div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-neo-secondary border-2 border-black flex items-center justify-center flex-shrink-0 mt-1"><Bot size={16} className="text-black" /></div>
                  <div className="bg-white border-2 border-black px-4 py-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex gap-1"><span className="w-2 h-2 bg-black animate-bounce" /><span className="w-2 h-2 bg-black animate-bounce [animation-delay:0.15s]" /><span className="w-2 h-2 bg-black animate-bounce [animation-delay:0.3s]" /></div>
                  </div>
                </div>
              )}
              <div ref={end} />
            </div>
            <div className="p-3 border-t-4 border-black bg-neo-bg">
              <form onSubmit={(e) => { e.preventDefault(); send() }} className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about skills..."
                  className="flex-1 bg-white border-4 border-black px-4 py-3 text-sm font-bold text-black placeholder:text-black/50 focus:outline-none focus:bg-neo-secondary focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" />
                <button type="submit" title="Send message" aria-label="Send message" className="p-3 bg-neo-accent border-4 border-black text-white btn-push shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Send size={20} className="stroke-[3px]" /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
