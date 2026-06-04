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

  const inputCls = "w-full bg-white border-[3px] sm:border-[4px] border-black px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-black font-bold placeholder:text-gray-400 focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-base sm:text-lg mb-4 sm:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"

  return (
    <ParallaxSection id="contact" className="!bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-b-4 border-white">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-white inline-block relative">
            LET'S
          </h2>
          <br />
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:1.5px_black] sm:[-webkit-text-stroke:2px_black] mt-2 inline-block bg-[#FDB927] px-3 sm:px-4 border-3 sm:border-4 border-black rotate-[-2deg]">
            TALK.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Form Side */}
          <div className="bg-[#6366F1] border-3 sm:border-4 border-black p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-[32px] shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <div className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl sm:text-3xl font-black text-black uppercase mb-6 sm:mb-8">Send a message</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase text-black mb-1.5 sm:mb-2 ml-1 sm:ml-2">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="JOHN DOE" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase text-black mb-1.5 sm:mb-2 ml-1 sm:ml-2">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="HELLO@EXAMPLE.COM" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase text-black mb-1.5 sm:mb-2 ml-1 sm:ml-2">Message</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="TELL ME ABOUT YOUR PROJECT..." />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full text-lg sm:text-xl h-[56px] sm:h-[64px] bg-[#2F81F7] border-3 sm:border-4 hover:bg-black uppercase font-black" disabled={status === "sending"}>
                  <Send size={20} strokeWidth={3} className="mr-2" /> 
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </Button>
                
                {status === "success" && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#22c55e] border-3 sm:border-4 border-black rounded-xl text-black font-black uppercase text-center text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    ✓ Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#e7000b] border-3 sm:border-4 border-black rounded-xl text-white font-black uppercase text-center text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    ✗ Failed to send. Please email directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase mb-4 sm:mb-6 leading-tight">
                Let's build <br /> something <span className="text-[#2F81F7] underline decoration-4 sm:decoration-[6px] underline-offset-4 sm:underline-offset-8">epic.</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-300 leading-relaxed max-w-lg">
                I'm open to freelance projects, startup collaborations, and full-time opportunities. Drop a line and let's make it happen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "bg-[#2F81F7]" },
                { icon: Github, label: "GitHub", value: "github.com/dinesh", href: personalInfo.github, color: "bg-black" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dinesh", href: personalInfo.linkedin, color: "bg-[#2F81F7]" },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: "#", color: "bg-[#FDB927]" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="group bg-white border-3 sm:border-4 border-black p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col items-start gap-3 sm:gap-4 cursor-pointer text-black">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${color} border-3 sm:border-4 border-black flex items-center justify-center rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-6 transition-transform`}>
                    <Icon size={20} className="text-white sm:w-6 sm:h-6" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black uppercase text-gray-600 mb-0.5 sm:mb-1">{label}</div>
                    <div className="text-base sm:text-lg font-bold text-black break-all">{value}</div>
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
