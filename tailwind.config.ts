import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0614",
        primary: "#9c6bff",
        accent: "#b99aff",
      },
      boxShadow: {
        glow: "0 0 40px rgba(156,107,255,0.4)",
        "glow-lg": "0 0 80px rgba(156,107,255,0.35)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(156,107,255,0.9)"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
