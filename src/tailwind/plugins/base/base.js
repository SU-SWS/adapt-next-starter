/**
 * Directory custom base styles
 */

module.exports = function () {
  return function ({ addBase }) {
    addBase({
      html: {
        scrollBehavior: 'smooth',
      },
    });
  };
};
