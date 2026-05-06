import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Neutral system
        background: "#FFFFFF",
        surface: "#F8FAFC",
        foreground: "#0F172A",
        muted: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
        },

        // Accents
        accent: { DEFAULT: "#2563EB", light: "#3B82F6", soft: "#93C5FD" },
        accentAlt: "#00C2A8",

        // Legacy compatibility mappings (kept for minimal changes)
        "neo-accent": "#FF6B6B",
        "neo-secondary": "#FFD93D",
        "neo-muted": "#C4B5FD",

        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(2,6,23,0.06)',
        'soft-md': '0 6px 18px rgba(2,6,23,0.08)',
        'soft-lg': '0 12px 30px rgba(2,6,23,0.10)',
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
