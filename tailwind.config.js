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
