/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        win7: {
          "endeavour": "#0354AD",
          "gamma-blue": "#11B7EB",
          "water-dew": "#ECFDFF",
          "crispy-yellow-green": "#F3EB2E",
          "uplifting-orange": "#F68635",
          "wild-lime": "#82C83D",
        },
      },
    },
  },
  plugins: [],
}
