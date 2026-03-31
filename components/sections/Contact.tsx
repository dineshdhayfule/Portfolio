"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"
import ParallaxSection, { SectionHeader } from "@/components/ui/ParallaxSection"
import GlassCard from "@/components/ui/GlassCard"
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

  const inputCls = "w-full bg-bg-card border border-[var(--border)] rounded-xl px-4 py-3 text-content-primary placeholder:text-content-muted focus:outline-none focus:border-accent/50 transition-colors text-sm"

  return (
    <ParallaxSection id="contact">
      <SectionHeader title="Get In" highlight="Touch" description="Have a project in mind or want to collaborate? Let's talk." />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium text-content-primary mb-1.5">Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" /></div>
              <div><label className="block text-sm font-medium text-content-primary mb-1.5">Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="your@email.com" /></div>
              <div><label className="block text-sm font-medium text-content-primary mb-1.5">Message</label><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Tell me about your project..." /></div>
              <Button type="submit" variant="primary" className="w-full !text-black [&_svg]:!text-black" disabled={status === "sending"}><Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}</Button>
              {status === "success" && <p className="text-success text-sm text-center">✓ Message sent! I&apos;ll reply soon.</p>}
              {status === "error" && <p className="text-red-400 text-sm text-center">✗ Failed. Please try again or email me directly.</p>}
            </form>
          </GlassCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-content-primary mb-3">Let&apos;s build something together</h3>
            <p className="text-content-secondary text-sm leading-relaxed">I&apos;m open to internships, freelance projects, and full-time opportunities. Whether you have a specific project or just want to connect — I&apos;d love to hear from you.</p>
          </div>
          <div className="space-y-3">
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Github, label: "GitHub Profile", href: personalInfo.github },
              { icon: Linkedin, label: "LinkedIn Profile", href: personalInfo.linkedin },
              { icon: MapPin, label: personalInfo.location, href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] text-content-secondary hover:text-content-primary transition-all text-sm">
                <Icon size={18} className="text-accent-light flex-shrink-0" /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
