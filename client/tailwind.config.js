/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"General Sans"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      colors: {
        ink: {
          950: "#050507",
          900: "#0a0a0f",
          800: "#101019",
          700: "#191923",
          600: "#23232f",
        },
        accent: {
          violet: "#8b5cf6",
          cyan: "#22d3ee",
          amber: "#f59e0b",
          pink: "#f472b6",
          rose: "#fb7185",
          emerald: "#10b981",
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "marquee-reverse": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      }
    },
  },
  plugins: [],
}
