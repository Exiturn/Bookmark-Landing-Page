/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        softRed: '#fa5757',
        softBlue: '#5368df',
        grayishBlue: '#9194a1',
        veryDarkBlue: '#252b46'
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        // 'xs': '280px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1024px',
        '2xl': '1024px'
      },
      fontFamily: {
        Rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
}
