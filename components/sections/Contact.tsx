"use client"
import { useState } from "react"
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"
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

  const inputCls = "w-full bg-white border-[4px] border-black px-6 py-4 rounded-xl text-black font-bold placeholder:text-gray-400 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-lg mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"

  return (
    <ParallaxSection id="contact" className="!bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-white">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-white inline-block relative">
            LET'S
          </h2>
          <br />
          <h2 className="text-[50px] md:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:2px_black] mt-2 inline-block bg-[#FDB927] px-4 border-4 border-black rotate-[-2deg]">
            TALK.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form Side */}
          <div className="bg-[#6366F1] border-4 border-black p-6 md:p-10 rounded-[32px] shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <div className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black text-black uppercase mb-8">Send a message</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-black uppercase text-black mb-2 ml-2">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="JOHN DOE" />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase text-black mb-2 ml-2">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="HELLO@EXAMPLE.COM" />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase text-black mb-2 ml-2">Message</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="TELL ME ABOUT YOUR PROJECT..." />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full text-xl h-[64px] bg-[#2F81F7] border-4 hover:bg-black uppercase font-black" disabled={status === "sending"}>
                  <Send size={24} strokeWidth={3} className="mr-2" /> 
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </Button>
                
                {status === "success" && (
                  <div className="mt-6 p-4 bg-[#22c55e] border-4 border-black rounded-xl text-black font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    ✓ Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-6 p-4 bg-[#e7000b] border-4 border-black rounded-xl text-white font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    ✗ Failed to send. Please email directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-4xl font-black text-white uppercase mb-6 leading-tight">
                Let's build <br /> something <span className="text-[#2F81F7] underline decoration-[6px] underline-offset-8">epic.</span>
              </h3>
              <p className="text-xl font-bold text-gray-300 leading-relaxed max-w-lg">
                I'm open to freelance projects, startup collaborations, and full-time opportunities. Drop a line and let's make it happen.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "bg-[#2F81F7]" },
                { icon: Github, label: "GitHub", value: "github.com/dinesh", href: personalInfo.github, color: "bg-black" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dinesh", href: personalInfo.linkedin, color: "bg-[#2F81F7]" },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: "#", color: "bg-[#FDB927]" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="group bg-white border-4 border-black p-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col items-start gap-4 cursor-pointer text-black">
                  <div className={`w-12 h-12 ${color} border-4 border-black flex items-center justify-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                    <Icon size={24} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-gray-600 mb-1">{label}</div>
                    <div className="text-lg font-bold text-black break-all">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
