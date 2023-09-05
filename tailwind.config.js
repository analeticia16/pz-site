/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: {
          DEFAULT: '#f6fbfe',
        },
        primary:{
          DEFAULT: '#6a0404',
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc4c4',
          300: '#ff9a9a',
          400: '#ff6161',
          500: '#ff2f2f',
          600: '#f21010',
          700: '#cc0909',
          800: '#a80c0c',
          900: '#8b1111',
          950: '#6a0404',
        },
        secondary: {
          DEFAULT: "#3a444e",
          50: '#f3f6f8',
          100: '#e2e9eb',
          200: '#c7d3da',
          300: '#a1b4bf',
          400: '#728d9e',
          500: '#577183',
          600: '#4b5f6f',
          700: '#41505d',
          800: '#3a444e',
          900: '#343c45',
          950: '#20262c',
        },
        accent: {
          DEFAULT: '#e5c352',
          50: '#fdfaed',
          100: '#f8efcd',
          200: '#efde98',
          300: '#e5c352',
          400: '#e2b43d',
          500: '#d99827',
          600: '#c0751f',
          700: '#a0561d',
          800: '#82441e',
          900: '#6c381b',
          950: '#3d1c0b',
        }
      }
    },
  },
  plugins: [],
}
