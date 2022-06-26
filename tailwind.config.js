

const withMT = require("@material-tailwind/html/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./*.html'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
});
