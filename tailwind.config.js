/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        rastro: {
          fondo: '#f7faf8',
          verde: '#15803d',
          gris: '#475569',
        }
      }
    },
  },
  plugins: [],
}