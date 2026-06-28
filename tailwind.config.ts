import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Forest Green
        primary: {
          DEFAULT: "#4A7C59",
          50: "#F0F7F3",
          100: "#D6EBE0",
          200: "#AECFC0",
          300: "#7FAF97",
          400: "#5E9474",
          500: "#4A7C59",
          600: "#3A6347",
          700: "#2D4A2D",
          800: "#1C3320",
          900: "#0F1F12",
        },
        // Gold/Amber accent
        gold: {
          DEFAULT: "#C4932A",
          100: "#FDF4E0",
          200: "#F7DFA0",
          300: "#EFC95A",
          400: "#D4A843",
          500: "#C4932A",
          600: "#A87820",
          700: "#8B6014",
          800: "#6E4A0A",
        },
        // Cream neutrals
        cream: {
          DEFAULT: "#F5F0E8",
          50: "#FDFCF9",
          100: "#F9F6F0",
          200: "#F5F0E8",
          300: "#EDE6D6",
          400: "#E0D5BC",
          500: "#CEC0A0",
          600: "#B8A880",
        },
        // Dark olive for text
        olive: {
          DEFAULT: "#2D4A2D",
          50: "#F2F6F2",
          100: "#D9E8D9",
          200: "#A8CBA8",
          300: "#72A872",
          400: "#4A8050",
          500: "#2D4A2D",
          600: "#1C3320",
          700: "#111F14",
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-earthy":
          "linear-gradient(135deg, #4A7C59 0%, #2D4A2D 50%, #1C3320 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4A843 0%, #C4932A 100%)",
        "gradient-hero":
          "linear-gradient(160deg, #F5F0E8 0%, #EDE6D6 40%, #d4e8d4 100%)",
        "gradient-hero-dark":
          "linear-gradient(160deg, #1C3320 0%, #2D4A2D 50%, #1a2e1a 100%)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 2s infinite",
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4,0,0.6,1) infinite",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {transform: "translateY(0px) rotate(0deg)"},
          "33%": {transform: "translateY(-18px) rotate(1deg)"},
          "66%": {transform: "translateY(-8px) rotate(-1deg)"},
        },
        scrollDot: {
          "0%": {opacity: "0", transform: "translateY(-6px)"},
          "50%": {opacity: "1"},
          "100%": {opacity: "0", transform: "translateY(8px)"},
        },
        shimmer: {
          "0%": {backgroundPosition: "-200% center"},
          "100%": {backgroundPosition: "200% center"},
        },
      },
      boxShadow: {
        earthy: "0 4px 24px rgba(45,74,45,0.12)",
        "earthy-lg": "0 8px 40px rgba(45,74,45,0.18)",
        gold: "0 4px 20px rgba(196,147,42,0.25)",
        card: "0 2px 16px rgba(45,74,45,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
