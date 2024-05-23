/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":  "#1E3E5B",
        "secondary":  "#7EC7DB",
        "text":  "#1B2828",
        "accent": "#EB7240"
      }
    },
  },
  plugins: [],
}

