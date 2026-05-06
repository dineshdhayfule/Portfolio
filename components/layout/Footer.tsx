import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { personalInfo, navItems } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-extrabold uppercase text-foreground mb-4 tracking-tighter">{personalInfo.name.split(" ")[0]}<span className="text-accent">.dev</span></h3>
            <p className="text-foreground font-semibold uppercase tracking-widest text-sm">{personalInfo.title}</p>
            <p className="text-muted font-semibold text-sm mt-1">{personalInfo.location}</p>
          </div>
          <div>
            <h4 className="text-xl font-extrabold uppercase text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col items-start gap-3">{navItems.map((item) => <a key={item.name} href={item.href} className="inline-block font-semibold uppercase border-b border-transparent hover:border-accent text-foreground transition-colors">{item.name}</a>)}</div>
          </div>
          <div>
            <h4 className="text-xl font-extrabold uppercase text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href={personalInfo.github} title="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 text-foreground hover:bg-white shadow-soft-sm rounded-xl"><Github size={24} /></a>
              <a href={personalInfo.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 text-foreground hover:bg-white shadow-soft-sm rounded-xl"><Linkedin size={24} /></a>
              <a href={`mailto:${personalInfo.email}`} title="Email" className="p-3 bg-white border border-gray-200 text-foreground hover:bg-white shadow-soft-sm rounded-xl"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-foreground font-semibold text-sm flex items-center justify-center gap-2 uppercase tracking-wider">© {new Date().getFullYear()} {personalInfo.name}. BUILT WITH <Heart size={16} className="fill-accent stroke-none" /></p>
        </div>
      </div>
    </footer>
  )
}
