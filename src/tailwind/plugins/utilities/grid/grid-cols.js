/**
 * Custom grid column widths
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      '.grid-cols-auto-1fr': {
        gridTemplateColumns: 'auto 1fr',
      },
    };

    addUtilities(newUtilities);
  };
};
