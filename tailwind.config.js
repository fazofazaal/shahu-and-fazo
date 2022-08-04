module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      'card-height': '357px',
    },
    width: {
      'card-width': '224px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
