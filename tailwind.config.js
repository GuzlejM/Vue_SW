/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#f5a816",
        "yellow-secondary": "#fdedd0",
      },
      animation: {
        default: "transition ease duration-300",
      },
      margin: {
        responsive: "m-3 sm:m-6 md:mx-8 lg:m-5 lg:mx-24",
      },
      scale: {
        // eslint-disable-next-line prettier/prettier
        3: "3",
        "07": "0.7",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      card_list_default: "0 6px 14px 0 rgba(46, 45, 57, 0.17)",
      card_list_hovered: "0 20px 34px 0 rgba(46, 45, 57, 0.17)",
      card_img_hovered: "0 0 0 14px rgba(250, 250, 250)",
    },
  },
  plugins: [],
};
