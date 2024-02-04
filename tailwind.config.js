/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kodchasan: "Kodchasan",
        Montserrat: "Montserrat",
        K2D: "K2D",
        Jura: "Jura",
      },
    },
  },
  plugins: [],
};
