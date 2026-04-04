import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "neo-bg": "#FFFDF5",
        "neo-text": "#000000",
        "neo-accent": "#FF6B6B",
        "neo-secondary": "#FFD93D",
        "neo-muted": "#C4B5FD",

        // Legacy compatibility mappings
        "bg-primary": "#FFFDF5",
        "bg-secondary": "#FFD93D",
        "bg-card": "#ffffff",
        "bg-card-hover": "#fbfcff",
        secondary: "#FFD93D",
        accent: { DEFAULT: "#FF6B6B", light: "#FF6B6B", soft: "#FF6B6B", glow: "#FF6B6B" },
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        "content-primary": "#000000",
        "content-secondary": "#000000",
        "content-muted": "#000000",
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000',
        'neo-md': '8px 8px 0px 0px #000',
        'neo-lg': '12px 12px 0px 0px #000',
        'neo-xl': '16px 16px 0px 0px #000',
        'neo-2xl': '20px 20px 0px 0px #000',
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        'spin-slow': { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(16px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
      },
    },
  },
  plugins: [],
}

export default config
