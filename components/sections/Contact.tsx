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

  const inputCls = "w-full bg-white border border-gray-200 px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm mb-4 rounded-xl shadow-soft-sm"

  return (
    <ParallaxSection id="contact">
      <SectionHeader title="Get In" highlight="Touch" description="Have a project in mind or want to collaborate? Let's talk." />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <NeoCard hover={false} className="">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div><label className="block text-sm font-semibold uppercase text-foreground mb-2">Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" /></div>
              <div><label className="block text-sm font-semibold uppercase text-foreground mb-2">Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="your@email.com" /></div>
              <div><label className="block text-sm font-semibold uppercase text-foreground mb-2">Message</label><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Tell me about your project..." /></div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "sending"}><Send size={20} /> {status === "sending" ? "Sending..." : "Send Message"}</Button>
              {status === "success" && <p className="text-foreground font-semibold text-sm text-center bg-accentAlt/10 border border-accentAlt/20 mt-4 p-2 rounded-xl">✓ Message sent! I'll reply soon.</p>}
              {status === "error" && <p className="text-foreground font-semibold text-sm text-center bg-accent/10 border border-accent/20 mt-4 p-2 rounded-xl">✗ Failed. Please try again or email me.</p>}
            </form>
          </NeoCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 flex flex-col justify-center">
          <div className="bg-white border border-gray-200 p-6 shadow-soft-sm rounded-2xl">
            <h3 className="text-3xl font-extrabold uppercase text-foreground mb-4">Let's build something together</h3>
            <p className="text-foreground font-medium leading-relaxed text-lg">I'm open to internships, freelance projects, and full-time opportunities. Whether you have a specific project or just want to connect — I'd love to hear from you.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Github, label: "GitHub Profile", href: personalInfo.github },
              { icon: Linkedin, label: "LinkedIn Profile", href: personalInfo.linkedin },
              { icon: MapPin, label: personalInfo.location, href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 min-h-[48px] bg-white border border-gray-200 text-foreground font-semibold uppercase tracking-widest shadow-soft-sm hover:-translate-y-0.5 transition-transform cursor-pointer rounded-xl">
                <Icon size={22} className="text-accent flex-shrink-0" /> <span className="break-all">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
