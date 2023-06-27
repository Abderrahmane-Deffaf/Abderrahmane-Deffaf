/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto Serif", "serif"],
      DM: ["DM Sans", "sans-serif"],
      Slab: ["Roboto Slab", "serif"],
      Sugarpunch: ["Sugarpunch DEMO", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

