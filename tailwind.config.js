/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#e50914",
        dark: "#141414",   
        light: "#f5f5f1",  
      }
    },
  },
  plugins: [],
}
