/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./src/app/styles/tokens/colors');
const font = require('./src/app/styles/tokens/font');
const breakpoints = require('./src/app/styles/tokens/breakpoints');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx, css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: breakpoints,
    fontWeight: {
      normal: '400',
      medium: '600',
      semibold: '700',
      bold: '800',
      extrabold: '900',
    },
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        ...font.family,
      },
      boxShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
