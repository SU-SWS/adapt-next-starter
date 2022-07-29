/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Tailwind Configuration.
 */
const path = require('path');
const plugin = require('tailwindcss/plugin');

// Path to custom Tailwind plugins for SAA
const dir = path.resolve(__dirname, 'src/tailwind/plugins');

module.exports = {
  prefix: 'su-',
  presets: [
    require('decanter'),
  ],
  content: [
    './src/**',
  ],
  theme: {
    // SAA themes extending our Decanter ones
    extend: {
      colors: require(`${dir}/theme/colors.js`)(),
      screens: require(`${dir}/theme/screens.js`)(),
      lineClamp: require(`${dir}/theme/lineClamp.js`)(),
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('children', '& > *');
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require(`${dir}/components/backface-visibility/backface-visibility.js`)(),
    require(`${dir}/components/link/underline.js`)(),
    require(`${dir}/utilities/grid/grid-cols.js`)(),
    require(`${dir}/utilities/break-words.js`)(),
  ],
};
