/** @type {import('tailwindcss').Config} */
module.exports = {
  server: {
    hmr: false
  },  // Ajout d'une virgule ici
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#0e0b1d",
        "white": "#ffffff",
        "dark-blue": "#00002b",
        "deep-blue": "#02022f",
        "darker-blue": "#030233",
        "dark-violet": "#16183F",  // Ajout d'un # manquant ici
        "violet": "#8884d8",
        "vert": "#82ca9d",
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'], // Utilisation de Google Fonts
        // 'custom': ['MyCustomFont', 'sans-serif'], // Utilisation de la police locale
      }
    },
  },
  plugins: [],
};
