const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        hero_bg: "#FAE9D8",
        primary: "#DE8D2D",
        primary_dark: "#C17A26",
        dark: "#55330B",
        light_bg: "#FFFCF9",
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".card-shadow": {
          boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
        },
        ".shadow-bg": {
          boxShadow: "0px 20px 53px 0px #00000040"
        },
        ".shadow-light": {
          boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #13131A inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
