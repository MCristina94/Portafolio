/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        'header-color': '#1A1525',
        
      },

      height: {
        '100': '25rem', 
        '110': '28rem',
        '120': '30rem',
        '130': '35rem',
        '140': '40rem',
        '150': '50rem',
      },
      fontSize: {
        '2xs': '0.625rem', // Personaliza con el tamaño que desees
      },
      colors: {
        'cod-gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#111111',
          'header-color-Orange': '#cf7f57',
          'header-color-Menta': '#90d5c3'
        },
      },
    },
  },
  plugins: [],
}

