/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF4200',
        'orange-dark': '#E63B00',
        'navbar': '#31303A',
        'button': "#00b2be",
        'button-dark': "#00A0AB"
      },
    },
  },
  plugins: [],
}