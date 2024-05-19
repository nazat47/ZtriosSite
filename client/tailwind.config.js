/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 3px 8px rgba(0, 0, 0, 0.24)",
      },
      keyframes: {
        scaleUp: {
          "0%": { scale: "0%" },
          "100%": { scale: "100%" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
