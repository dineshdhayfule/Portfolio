"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import NeoCard from "@/components/ui/NeoCard"
import Button from "@/components/ui/button"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE", ...form }),
      })
      const data = await res.json()
      if (data.success) { setStatus("success"); setForm({ name: "", email: "", message: "" }); setTimeout(() => setStatus("idle"), 5000) }
      else setStatus("error")
    } catch { setStatus("error") }
  }

  const inputCls = "w-full bg-white border-4 border-black px-4 py-3 text-black font-bold placeholder:text-black/50 focus:outline-none focus:bg-neo-secondary focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-sm mb-4"

  return (
    <ParallaxSection id="contact">
      <SectionHeader title="Get In" highlight="Touch" description="Have a project in mind or want to collaborate? Let's talk." />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <NeoCard hover={false} className="rotate-1">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div><label className="block text-sm font-black uppercase text-black mb-2">Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="your@email.com" /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Message</label><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Tell me about your project..." /></div>
              <Button type="submit" variant="primary" size="lg" className="w-full rotate-1 !text-black [&_svg]:!text-black" disabled={status === "sending"}><Send size={20} className="stroke-[3px]" /> {status === "sending" ? "Sending..." : "Send Message"}</Button>
              {status === "success" && <p className="text-black font-black uppercase text-sm text-center bg-neo-success border-4 border-black mt-4 p-2">✓ Message sent! I'll reply soon.</p>}
              {status === "error" && <p className="text-white font-black uppercase text-sm text-center bg-neo-accent border-4 border-black mt-4 p-2">✗ Failed. Please try again or email me.</p>}
            </form>
          </NeoCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 flex flex-col justify-center">
          <div className="bg-white border-4 border-black p-6 shadow-neo-md -rotate-1">
            <h3 className="text-3xl font-black uppercase text-black mb-4">Let's build something together</h3>
            <p className="text-black font-bold leading-relaxed text-lg">I'm open to internships, freelance projects, and full-time opportunities. Whether you have a specific project or just want to connect — I'd love to hear from you.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Github, label: "GitHub Profile", href: personalInfo.github },
              { icon: Linkedin, label: "LinkedIn Profile", href: personalInfo.linkedin },
              { icon: MapPin, label: personalInfo.location, href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 min-h-[48px] bg-neo-secondary border-4 border-black text-black font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer">
                <Icon size={24} className="stroke-[3px] text-black flex-shrink-0" /> <span className="break-all">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
