/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User's exact 8-color palette specification from swatch card
        burgundy: {
          DEFAULT: "#542B38", // Deep Burgundy · Primary brand
          dark: "#3B1B25",
          light: "#754354",   // Muted Wine · Secondary accent
          wine: "#754354",
          soft: "#F5EFF1",
          border: "#D9C3CA",
        },
        wine: {
          DEFAULT: "#754354", // Muted Wine · Secondary accent
          dark: "#5A303F",
          light: "#8E5568",
          soft: "#F8EFF2",
          border: "#D8C5CC",
        },
        ivory: {
          DEFAULT: "#FAF7F2", // Warm Ivory · Main background
          sand: "#EDE5DF",    // Soft Sand · Cards and sections
          surface: "#FFFFFF", // White · Content surfaces
          border: "#EDE5DF",
        },
        sand: {
          DEFAULT: "#EDE5DF", // Soft Sand · Cards and sections
          dark: "#DDD3CB",
          light: "#F5EFEB",
          border: "#D9CFC7",
        },
        charcoal: {
          DEFAULT: "#292526", // Warm Charcoal · Headings
          dark: "#1B1819",
          muted: "#A69A95",   // Warm Grey · Secondary text
          light: "#4E4748",
        },
        grey: {
          DEFAULT: "#A69A95", // Warm Grey · Secondary text
          muted: "#A69A95",
          dark: "#7A6E6A",
          light: "#CCC2BE",
          border: "#EDE5DF",
        },
        gold: {
          DEFAULT: "#B58B55", // Antique Gold · Awards and highlights
          dark: "#966F3E",
          soft: "#D1AF7F",
          light: "#F7F2EB",
          border: "#E0CCA9",
        },
        white: {
          DEFAULT: "#FFFFFF", // White · Content surfaces
        },
        // Helpful aliases to preserve 100% color consistency
        academic: {
          DEFAULT: "#542B38",
          dark: "#3B1B25",
          light: "#754354",
          soft: "#F5EFF1",
          border: "#D9C3CA",
        },
        slate: {
          DEFAULT: "#292526",
          muted: "#A69A95",
          text: "#4E4748",
          light: "#A69A95",
          border: "#EDE5DF",
        },
        graphite: {
          DEFAULT: "#292526",
          dark: "#1B1819",
          muted: "#A69A95",
        },
      },
      fontFamily: {
        serif: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        editorial: ["'Lora'", "'Georgia'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
      maxWidth: {
        academic: "1280px",
      },
    },
  },
  plugins: [],
}
