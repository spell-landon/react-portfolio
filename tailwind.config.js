/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#242424',
        lightGray: '#D9D9D9',
        iconGray: '#939393',
      },
    },
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
