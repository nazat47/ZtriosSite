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
    },
  },
  plugins: [],
};
