/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        dark: "#1b1b1b",
        textLight: "#7f7f7f",
        titleLight: "#666666",
        textDark: "#C2C2C2",
        titleDark: "#E0E0E0",
      },
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '0px',
        'sm': '651px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}

