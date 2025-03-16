/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  preflight: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  theme: {
    colors: {
      primary: "#1B5E20", // Hijau Islami
      secondary: "#B8860B", // Emas
      accent: "#388E3C", // Hijau Muda
      background: "#F8F9FA",
      text: "#2D3748",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      emerald: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#A7F3D0",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857",
        800: "#065F46",
        900: "#064E3B",
      },
      gold: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#B8860B", // Dark Gold
        700: "#92400E",
        800: "#78350F",
        900: "#451A03",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      green: {
        500: "#3D8052",
        700: "#2D5F3C",
      },
      yellow: {
        500: "#EAAF2B",
        600: "#D19516",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        arabic: ["Amiri", "var(--font-lateef)", "serif"],
        display: ["Noto Sans Arabic", "var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "pattern-islamic": "url('/images/bg-base.svg')",
        "pattern-light": "url('/images/pattern-light.svg')",
      },
    },
  },
  plugins: [],
  optimize: {
    removeUnusedUtilities: true,
    minify: true,
  },
};
