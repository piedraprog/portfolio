/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['General Sans', 'sans-serif'],
      },
      screens: {
        'xxs':'390px',
        'xs': '480px', // Añadido para dispositivos extra pequeños
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
  plugins: [
    createThemes({
      monochrome: {
        'primary': '#272829',
        'background': '#FFF6E0',
        'accent': '#000000',
      },
      greenVeige : {
        'primary': '#105717',
        'background': '#F8F4E1',
        'accent': '#1E1E1E',
      },
      blueVeige: {
        'primary': '#0C1844',
        'background': '#FFF5E1',
        'brand': '#000000',
      },
      blueRedWine:{
        'primary': '#00224D',
        'background': '#A0153E',
        'brand': '#000000',
      },
      blueOrange:{
        'primary': '#0C1844',
        'background': '#FE3C01',
        'brand': '#000000',
      }
    })
  ],
}

