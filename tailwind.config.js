/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            light: "#60A5FA",
            DEFAULT: "#2563EB",
            dark: "#1D4ED8",
          },
          indigo: {
            light: "#818CF8",
            DEFAULT: "#4F46E5",
            dark: "#3730A3",
          },
          sky: {
            light: "#38BDF8",
            DEFAULT: "#0EA5E9",
            dark: "#0369A1",
          },
          lightBg: "#F8FAFC",
          purple: {
            light: "#C084FC",
            DEFAULT: "#A855F7",
            dark: "#7E22CE",
          },
          pink: {
            light: "#F472B6",
            DEFAULT: "#EC4899",
            dark: "#BE185D",
          },
          dark: {
            light: "#1E293B",
            DEFAULT: "#0F172A",
            dark: "#020617",
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
