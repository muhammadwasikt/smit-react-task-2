/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeColor: '#03302d',
        textColor: '#ffff', 
      }
    },
  },
  plugins: [],
}

