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
        'accent': '0 4px 6px rgba(122, 48, 176, 0.5)',
        'secondaccent': '0 4px 6px rgba(0, 175, 238, 0.5)',
      },
      screens: {
      xl: '1350px',
    },
    },
  },
  plugins: [],
}

