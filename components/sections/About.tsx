"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import ParallaxSection from "@/components/ui/ParallaxSection"
import Image from "next/image"

export default function About() {
  return (
    <ParallaxSection id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-b-4 border-black">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-24 items-start">
          
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start shrink-0 relative">
            <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-black leading-none uppercase mb-6 sm:mb-8">
              ABOUT <br />
              <span className="text-[var(--accent)]">ME.</span>
            </h2>
            
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5] bg-[#E8E8E8] border-4 sm:border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-sm overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <Image src="/avatar.png" alt={personalInfo.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <span className="text-[80px] sm:text-[100px] font-black opacity-10">{personalInfo.name.charAt(0)}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-white border-t-3 sm:border-t-4 border-black font-bold text-center text-sm sm:text-base">
                {personalInfo.name}
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-6 md:-right-12 hidden md:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-black rotate-[15deg]">
                <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6 sm:space-y-8 mt-4 md:mt-24">
            <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl sm:rounded-2xl relative">
              <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8 bg-[#FDB927] border-3 sm:border-4 border-black px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-bold uppercase rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                The Story
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-black">
                {personalInfo.about.map((p, i) => (
                  <motion.p 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </ParallaxSection>
  )
}
