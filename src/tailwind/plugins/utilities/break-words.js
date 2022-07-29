/**
 * Adds to break-word utility provided by TailwindCSS core.
 */

module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.break-words': {
        wordBreak: 'break-word',
      },
    };

    addUtilities(newUtilities);
  };
};
