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
    },
  },
  plugins: [
    createThemes({
      one: {
        'primary': '#105717',
        'background': '#F8F4E1',
        'accent': '#1E1E1E',
      },
      two: {
        'primary': '#00224D',
        'background': '#A0153E',
        'brand': '#000000',
      },
      monochrome: {
        'primary': '#272829',
        'background': '#FFF6E0',
        'brand': '#000000',
      },
      three:{
        'primary': '#0C1844',
        'background': '#C80036',
        'brand': '#000000',
      },
      four:{
        'primary': '#0C1844',
        'background': '#FE3C01',
        'brand': '#000000',
      }
    })
  ],
}

