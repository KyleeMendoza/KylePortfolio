/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0F172A",
        midBlue: "#60ECBD",
      },
    },
  },
  plugins: [],
});
