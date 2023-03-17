/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*{HTML,js}"],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
