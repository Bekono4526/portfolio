/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false, // or 'media' or 'class'
  server: {
    hmr: false
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#0e0b1d",
        "white": "#ffffff",
        "dark-blue": "#00002b",
        "deep-blue": "#02022f",
        "darker-blue": "#030233",
        "dark-violet": "#16183F",
        "violet": "#8884d8",
        "vert": "#82ca9d",
        'blue-500': '#007cf0',
        'blue-600': '#00dfd8',
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'], // Utilisation de Google Fonts
        // 'custom': ['MyCustomFont', 'sans-serif'], // Utilisation de la police locale
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
