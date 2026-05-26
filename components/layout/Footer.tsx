import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react"
import { personalInfo, navItems } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-white relative overflow-hidden text-white">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        
        {/* Giant Typography Banner */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[120px] font-black leading-none uppercase text-white tracking-tighter">
            LET'S WORK
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[120px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:3px_white] tracking-tighter">
              TOGETHER.
            </h2>
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#2F81F7] border-[6px] border-black rounded-full shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] transition-all duration-200 mt-4 md:mt-6 shrink-0">
              <ArrowUpRight size={48} className="text-white group-hover:rotate-45 transition-transform duration-300" strokeWidth={3} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 pt-12 border-t-4 border-white">
          
          <div className="md:col-span-5">
            <h3 className="text-4xl font-black text-white mb-6 uppercase flex items-center gap-2">
              <div className="w-6 h-6 bg-[#2F81F7] border-4 border-white"></div>
              {personalInfo.name.split(" ")[0]}
              <span className="text-transparent [-webkit-text-stroke:2px_white]">.DEV</span>
            </h3>
            <p className="text-white font-bold text-lg mb-2">{personalInfo.title}</p>
            <p className="text-gray-400 font-bold text-lg">{personalInfo.location}</p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-2xl font-black text-black mb-8 uppercase bg-[#FDB927] border-4 border-black px-4 py-2 inline-block">Quick Links</h4>
            <div className="flex flex-col items-start gap-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-black uppercase text-white hover:underline decoration-[4px] underline-offset-4 hover:text-[#6366F1] transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-2xl font-black text-white mb-8 uppercase bg-[#22c55e] border-4 border-black px-4 py-2 inline-block">Socials</h4>
            <div className="flex flex-col gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white border-[3px] border-black rounded-xl text-black hover:bg-gray-800 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase">
                <Github size={24} strokeWidth={2.5} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-white border-[3px] border-black rounded-xl text-black hover:bg-[#2F81F7] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase">
                <Linkedin size={24} strokeWidth={2.5} /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-3 bg-white border-[3px] border-black rounded-xl text-black hover:bg-[#2F81F7] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase">
                <Mail size={24} strokeWidth={2.5} /> Email
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-20 pt-8 border-t-[1px] border-gray-800 flex justify-center items-center">
          <p className="text-gray-400 font-medium text-sm">
            Made by {personalInfo.name.split(" ")[0]} - Powered by Next.js
          </p>
        </div>
        
      </div>
    </footer>
  )
}
