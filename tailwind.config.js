/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',    // Warm brown for bedding
        secondary: '#D2691E',  // Chocolate
        accent: '#F5DEB3',     // Wheat/cream
        dark: '#2C1810',       // Dark brown
        light: '#FFF8DC',      // Cornsilk
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
