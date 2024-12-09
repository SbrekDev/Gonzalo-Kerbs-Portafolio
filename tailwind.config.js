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
      },
    },
  },
  plugins: [],
}
