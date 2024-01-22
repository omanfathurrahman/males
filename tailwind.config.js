/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#6A65FF'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  }
}

