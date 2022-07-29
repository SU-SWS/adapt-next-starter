/**
 * Make any HTML element clickable by stretching a nested link
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      '.stretched-link': {
        '&::after': {
          display: 'block',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '1',
          pointerEvents: 'auto',
          content: '""',
          backgroundColor: 'transparent',
        },
        '&:hover, &:focus': {
          outline: 'none',
        },
      },
      '.stretched-link-hocus-outline-black-20': {
        '&:hover, &:focus': {
          '&::after': {
            border: '1px solid #43423E',
          },
        },
      },
    };

    addComponents(components);
  };
};
