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
        gold: {
          light: '#e5c468',
          DEFAULT: '#c8a858',
          dark: '#a68538',
          deep: '#856624',
          tint: 'rgba(200, 168, 88, 0.15)',
        },
        cinema: {
          bg: '#050505',
          card: '#111111',
          cardHover: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGold: 'rgba(200, 168, 88, 0.35)',
        }
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        ui: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
