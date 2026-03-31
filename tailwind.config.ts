import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
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
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(16px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
      },
    },
  },
  plugins: [],
}

export default config
