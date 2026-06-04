import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react"
import { personalInfo, navItems } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-white relative overflow-hidden text-white">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 relative z-10">
        
        {/* Giant Typography Banner */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[100px] lg:text-[120px] font-black leading-none uppercase text-white tracking-tighter">
            LET'S WORK
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <h2 className="text-[10vw] sm:text-[8vw] md:text-[100px] lg:text-[120px] font-black leading-none uppercase text-transparent [-webkit-text-stroke:1.5px_white] sm:[-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white] tracking-tighter">
              TOGETHER.
            </h2>
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#2F81F7] border-4 sm:border-[6px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] transition-all duration-200 mt-2 sm:mt-4 md:mt-6 shrink-0">
              <ArrowUpRight size={32} className="text-white group-hover:rotate-45 transition-transform duration-300 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={3} />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 pt-8 sm:pt-12 border-t-4 border-white">
          
          <div className="sm:col-span-2 md:col-span-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 uppercase flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2F81F7] border-3 sm:border-4 border-white"></div>
              {personalInfo.name.split(" ")[0]}
              <span className="text-transparent [-webkit-text-stroke:1.5px_white] sm:[-webkit-text-stroke:2px_white]">.DEV</span>
            </h3>
            <p className="text-white font-bold text-base sm:text-lg mb-2">{personalInfo.title}</p>
            <p className="text-gray-400 font-bold text-base sm:text-lg">{personalInfo.location}</p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-xl sm:text-2xl font-black text-black mb-6 sm:mb-8 uppercase bg-[#FDB927] border-3 sm:border-4 border-black px-3 sm:px-4 py-1.5 sm:py-2 inline-block">Quick Links</h4>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-base sm:text-lg font-black uppercase text-white hover:underline decoration-[4px] underline-offset-4 hover:text-[#6366F1] transition-colors py-1">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase bg-[#22c55e] border-3 sm:border-4 border-black px-3 sm:px-4 py-1.5 sm:py-2 inline-block">Socials</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border-[3px] border-black rounded-xl text-black hover:bg-gray-800 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase text-sm sm:text-base">
                <Github size={20} strokeWidth={2.5} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border-[3px] border-black rounded-xl text-black hover:bg-[#2F81F7] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase text-sm sm:text-base">
                <Linkedin size={20} strokeWidth={2.5} /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border-[3px] border-black rounded-xl text-black hover:bg-[#2F81F7] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] btn-push font-bold uppercase text-sm sm:text-base">
                <Mail size={20} strokeWidth={2.5} /> Email
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t-[1px] border-gray-800 flex justify-center items-center">
          <p className="text-gray-400 font-medium text-xs sm:text-sm">
            Made by {personalInfo.name.split(" ")[0]} - Powered by Next.js
          </p>
        </div>
        
      </div>
    </footer>
  )
}
