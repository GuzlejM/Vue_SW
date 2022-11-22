/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#f5a816",
        "yellow-secondary": "#fdedd0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      card_default: "0 6px 14px 0px rgba(46, 45, 57, 0.17)",
      card_hovered: "0 20px 34px 0px rgba(46, 45, 57, 0.17)",
    },
  },
  plugins: [],
};
