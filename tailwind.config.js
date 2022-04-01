module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono-r': ['IBMPlexMonoRegular', 'monospace'],
        'mono-m': ['IBMPlexMonoMedium','monospace'],
        'sans': ['IBMPlexSans','sans-serif'],
      },
      colors: {
        accent: 'hsla(144,76%,54%,1)',
        black: {
          100: 'hsla(220,12%,5%,1)',
          200: 'hsla(220,12%,8%,1)',
          300: 'hsla(220,12%,10%,1)',
          400: 'hsla(220,12%,15%,1)',
          500: 'hsla(220,12%,20%,1)',
        },
      }
    },
  },
  plugins: [],
}
