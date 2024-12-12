/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#eeeeee",
          dark: "#222831",
        },
        secondary: "#393e46",
        accent: "#00adb5",
        accent2: "#00afee"
      },
      boxShadow: {
        'accent': '#7a30b0',
      },
      screens: {
      xl: '1350px', // O define un nuevo breakpoint aquí si es necesario.
    },
    },
  },
  plugins: [],
}

