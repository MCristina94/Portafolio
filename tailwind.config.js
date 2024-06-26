/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontSize:{
        'xxs': '0.25rem',
      },
      backgroundColor: {
        'header-color': '#1A1525',
        
      },
      width:{
        '2.8': '2.8rem',
        '3.2': '3.2rem'
      },
      height: {
        '100': '25rem', 
        '110': '28rem',
        '120': '30rem',
        '130': '35rem',
        '140': '40rem',
        '150': '50rem',
        '2.8': '2.8rem',
        '3.2': '3.2rem'
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
          'parrafo': '#71717a',
          'header-color-Orange': '#cf7f57',
          'header-color-Menta': '#90d5c3',
          'purpura-conoceme': '#6d40ae',
          'purpura-footer' : '#f8f7fc',
          'purpura-border': 'rgba(109, 64, 174, 0.5)'
        },
      },
    },
  },
  plugins: [],
}

