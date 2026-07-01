/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#051622',       // Sleek luxury dark blue
          deep: '#0b2545',       // Primary Deep Blue
          navy: '#134074',       // Medium Accent Navy
          light: '#eef4f8',      // Light brand bg
          orange: '#f97316',     // Highlight Orange (matching logo accent)
          orangeHover: '#ea580c',// Darker Orange for hover
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
