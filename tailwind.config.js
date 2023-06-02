/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './*'],
  theme: {
    extend: {
      colors : {
        customBlack : '#111216' ,
        MenuBlack : 'rgba(0 ,0 ,0 ,.6)'
      }
    },
  },
  plugins: [],
}
