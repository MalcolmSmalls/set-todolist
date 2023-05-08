/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'Arial', 'sans-serif'],
      },

      colors: {
        'light-dark': 'rgb(31 41 55)',
        dark: 'rgb(17 24 39)',
        accent: 'rgb(99 102 241)',
      },
      plugins: [],
    },
  },
}
