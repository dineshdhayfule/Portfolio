import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { personalInfo, navItems } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t-8 border-black bg-neo-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-black uppercase text-black mb-4 tracking-tighter">{personalInfo.name.split(" ")[0]}<span className="text-white text-stroke-black">.DEV</span></h3>
            <p className="text-black font-bold uppercase tracking-widest text-sm">{personalInfo.title}</p>
            <p className="text-black/70 font-bold text-sm mt-1">{personalInfo.location}</p>
          </div>
          <div>
            <h4 className="text-xl font-black uppercase text-black mb-4">Quick Links</h4>
            <div className="flex flex-col items-start gap-3">{navItems.map((item) => <a key={item.name} href={item.href} className="inline-block font-bold uppercase border-b-4 border-transparent hover:border-black text-black transition-colors">{item.name}</a>)}</div>
          </div>
          <div>
            <h4 className="text-xl font-black uppercase text-black mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href={personalInfo.github} title="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-4 border-black text-black hover:bg-neo-accent btn-push"><Github size={24} className="stroke-[3px]" /></a>
              <a href={personalInfo.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-4 border-black text-black hover:bg-neo-accent btn-push"><Linkedin size={24} className="stroke-[3px]" /></a>
              <a href={`mailto:${personalInfo.email}`} title="Email" className="p-3 bg-white border-4 border-black text-black hover:bg-neo-accent btn-push"><Mail size={24} className="stroke-[3px]" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t-4 border-black text-center">
          <p className="text-black font-bold text-sm flex items-center justify-center gap-2 uppercase tracking-wider">© {new Date().getFullYear()} {personalInfo.name}. BUILT WITH <Heart size={16} className="fill-neo-accent stroke-black stroke-[2px]" /></p>
        </div>
      </div>
    </footer>
  )
}
