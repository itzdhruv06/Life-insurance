/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  animation: {
  fadeIn: "fadeIn 2s ease-in-out forwards",
},
keyframes: {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
},
  theme: {
    extend: {},
  },
  plugins: [],
}
