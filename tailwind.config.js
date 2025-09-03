/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // 👈 important
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ['Lato', 'sans-serif'],
        montserrat:['montserrat','sanserif']
      }
    },
  },
  plugins: [],
}
