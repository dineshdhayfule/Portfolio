import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "neo-bg": "var(--bg-primary)",
        "neo-text": "var(--text-primary)",
        "neo-accent": "var(--accent)",
        "neo-secondary": "var(--secondary)",
        "neo-muted": "var(--text-muted)",

        // Legacy compatibility mappings
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "bg-card-hover": "var(--bg-card-hover)",
        secondary: "var(--secondary)",
        accent: { DEFAULT: "var(--accent)", light: "var(--accent-light)", soft: "var(--accent-soft)", glow: "var(--accent-glow)" },
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        "content-primary": "var(--text-primary)",
        "content-secondary": "var(--text-secondary)",
        "content-muted": "var(--text-muted)",
        
        border: "var(--border)",
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-md': '6px 6px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-xl': '12px 12px 0px 0px rgba(0,0,0,1)',
        'neo-2xl': '16px 16px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideInUp 0.6s ease-out",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        'spin-slow': { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInUp: { "0%": { transform: "translateY(20px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
}

export default config
