/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '637px',
      lg: '887px',
      xl: '967px',
      xxl: '1120px'
    },
    extend: {
      colors: {
        tail_l_theme: '#d9d9ff',
        tail_light: '#c7c7ff',
        tail_l_thru: '#c7c7ff99',
        tail_dark: '#00001a',
        tail_d_thru: '#00001a99',
        tail_d_theme: '#00001a22',
        tail_blue: '#2f2fff',
        tail_b_theme: '#8d8dff'
      }
    },
  },
  plugins: [],
}
