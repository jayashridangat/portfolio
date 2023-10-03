/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
      'Aparajita':['Aparajita'],
      'century_gothic':['century gothic'],
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: '#BF8D39',
        },
        royal:{
          DEFAULT:'#111827',
        },
        back: {
          DEFAULT:'#020617',
        },
        rose: {
          DEFAULT:"#EAB2A2",
        },
      }
    },
  },
  plugins: [],
}