/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: "#FFA500",
        brandYellow: "#FFD700",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

