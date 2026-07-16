import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#FF4D61",
          DEFAULT: "#DD0121",
          dark: "#B00017",
          glow: "rgba(221, 1, 33, 0.4)",
        },
        dark: {
          bg: "#0A0A0A",
          card: "#121212",
          cardHover: "#1C1C1C",
          border: "#262626",
          muted: "#9CA3AF",
        }
      },
      boxShadow: {
        'glow-red': '0 0 15px rgba(221, 1, 33, 0.4)',
        'glow-red-lg': '0 0 25px rgba(221, 1, 33, 0.6)',
      }
    },
  },
  plugins: [],
} satisfies Config;
