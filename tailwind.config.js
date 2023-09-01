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
          DEFAULT: "var(--background)"
        },
        primary:{
          DEFAULT: "var(--primary)"
        },
        secondary: {
          DEFAULT: "var(--secondary)"
        },
        accent: {
          DEFAULT: "var(--accent)"
        }
      }
    },
  },
  plugins: [],
}
