/**
 * Sets styles for all links within a parent container
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.link-no-underline a': {
        textDecoration: 'none',
      },

    };

    addComponents(components);
  };
};
