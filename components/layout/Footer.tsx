import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { personalInfo, navItems } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-2">{personalInfo.name.split(" ")[0]}<span className="text-content-primary">.dev</span></h3>
            <p className="text-content-muted text-sm">{personalInfo.title}</p>
            <p className="text-content-muted text-sm mt-1">{personalInfo.location}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-content-primary mb-3">Quick Links</h4>
            <div className="space-y-2">{navItems.map((item) => <a key={item.name} href={item.href} className="block text-sm text-content-muted hover:text-secondary transition-colors">{item.name}</a>)}</div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-content-primary mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href={personalInfo.github} title="GitHub profile" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] text-content-muted hover:text-secondary transition-all"><Github size={18} /></a>
              <a href={personalInfo.linkedin} title="LinkedIn profile" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] text-content-muted hover:text-secondary transition-all"><Linkedin size={18} /></a>
              <a href={`mailto:${personalInfo.email}`} title="Send email" aria-label="Send email" className="p-2 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-[var(--border)] text-content-muted hover:text-secondary transition-all"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-content-muted text-sm flex items-center justify-center gap-1">© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js <Heart size={12} className="text-content-muted" /> & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
