module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#32e379',
        black: {
          100: 'hsla(220,12%,5%,1)',
          200: 'hsla(220,12%,8%,1)',
          300: 'hsla(220,12%,10%,1)',
          400: 'hsla(220,12%,15%,1)',
          500: 'hsla(220,12%,20%,1)',
          600: 'hsla(220,12%,25%,1)',
        },
      },
    },
  },
  plugins: [],
};
