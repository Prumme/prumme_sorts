/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",
        "180": "45rem",
        "200": "50rem",
      },
    },
  },
  plugins: [],
}