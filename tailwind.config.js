/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "night": "#0C090A",
        "blue-complement": "#1D2128",
        "day": "#D4C7CB",
      }
    },
  },
  plugins: [],
}
