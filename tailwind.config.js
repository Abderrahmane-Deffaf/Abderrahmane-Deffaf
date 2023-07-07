/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      gray: "gray",
      darkgray: "rgba(255, 255, 255, 0.55);",
      transparent: "rgba(255, 255, 255, 0);",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto Serif", "serif"],
      DM: ["DM Sans", "sans-serif"],
      Slab: ["Roboto Slab", "serif"],
      Sugarpunch: ["Sugarpunch DEMO", "sans-serif"],
    },
    screens: {
      tablet: "550px",
      laptop: "1024px",
    },
  },
  plugins: [],
};

