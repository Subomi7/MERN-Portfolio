/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#f97316',
        tertiary: '#54d6bb',
      },
    },
    screens: {
      lg: { max: '2023px' },
      sm: { max: '1000px' },
    },
  },
  plugins: [],
};
