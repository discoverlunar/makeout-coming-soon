/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      },
    },
    fontFamily: {
        sans: ['PPNeueMontreal', 'sans-serif'],
    },
  },
  plugins: [],
}

