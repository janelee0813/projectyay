import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          soft: "#F5F5F5",
          mute: "#ECECEC"
        },
        ink: {
          DEFAULT: "#18181B",
          soft: "#4A4A4F"
        },
        glow: {
          sky: "#8CCBFF",
          blue: "#537CFF",
          cyan: "#65E6EF",
          lavender: "#C6A7FF",
          pink: "#F1A9E9"
        }
      },
      fontFamily: {
        kr: ["var(--font-kr)", "Pretendard", "SUIT", "Noto Sans KR", "sans-serif"],
        en: ["var(--font-en)", "var(--font-kr)", "sans-serif"]
      },
      maxWidth: {
        content: "1440px"
      },
      transitionTimingFunction: {
        glow: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      keyframes: {
        "drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-2%,0) rotate(3deg)" }
        },
        "grain-shift": {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-4%,-4%)" }
        }
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "grain-shift": "grain-shift 1.4s steps(2) infinite"
      }
    }
  },
  plugins: []
};

export default config;
