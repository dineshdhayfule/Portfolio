/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      colors: {
        ...defaultConfig.theme.extend.colors,
        // Light Mode Colors
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F5F5F5",
        },
        surface: {
          DEFAULT: "#F1F3F4",
          hover: "#E8EAED",
        },
        "text-primary": "#202124",
        "text-secondary": "#5F6368",
        border: "#DADCE0",
        accent: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC04",
          green: "#34A853",
        },
        // Dark Mode Colors (applied with dark: prefix)
        dark: {
          background: {
            DEFAULT: "#121212",
            secondary: "#202124",
          },
          surface: {
            DEFAULT: "#1F1F1F",
            secondary: "#2F2F2F",
            hover: "#3C4043",
          },
          "text-primary": "#E8EAED",
          "text-secondary": "#9AA0A6",
          border: "#5F6368",
          accent: {
            blue: "#8AB4F8",
            red: "#F28B82",
            yellow: "#FDD663",
            green: "#81C995",
          },
        },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
