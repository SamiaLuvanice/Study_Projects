import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          pink: "#ec4899"
        }
      },
      boxShadow: {
        glow: "0 0 25px rgba(236, 72, 153, 0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
