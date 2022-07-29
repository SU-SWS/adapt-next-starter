/**
 * Backface visibility utility for resolving performance/rendering issues
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
    };

    addComponents(components);
  };
};
