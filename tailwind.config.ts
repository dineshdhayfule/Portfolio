import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"], // Reverted darkMode to only "class"
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans", "Fira Sans", "Open Sans", "system-ui", "sans-serif"], // Updated sans font
        mono: ["Space Mono", "Fira Code", "monospace"], // Added Space Mono and Fira Code for mono
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      colors: {
        // Core backgrounds - now using CSS variables from globals.css
        "core-bg": "var(--bg-background)",
        "surface-bg": "var(--bg-surface)",
        "elevated-bg": "var(--bg-surface-hover)", // Using surface-hover for higher elevation

        // Accent colors - now using CSS variables from globals.css
        "primary-accent": "var(--accent-blue)",
        "secondary-accent": "var(--accent-green)", // Using accent-green for lime green
        "subtle-highlight": "var(--accent-cyan)", // New variable for subtle cyan

        // Text colors - now using CSS variables from globals.css
        "primary-text": "var(--text-primary)",
        "secondary-text": "var(--text-secondary)",
        "disabled-text": "var(--text-disabled)", // New variable for disabled text

        // UI elements - now using CSS variables from globals.css
        "button-bg": "var(--button-bg)",
        "button-hover": "var(--button-hover)",
        "button-text": "var(--button-text)",
        divider: "var(--border-color)", // Using border-color for divider

        // shadcn/ui colors (keeping these as they are standard)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
}

export default config
