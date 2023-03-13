module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeOrange' : '#F56524',
        'backgroundOrange' : '#FDE6DC'
      },

      borderWidth: {
        '3' : '3px'
      }
    },
  },
  plugins: [],
}
