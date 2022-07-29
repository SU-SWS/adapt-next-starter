const path = require('path');

const transform = (src, filePath) => {
  if (path.extname(filePath) !== '.svg') {
    return src;
  }

  return {
    code: `
module.exports = {
  src: '${path.basename(filePath)}',
  width: 100,
  height: 100,
}`,
  };
};

module.exports = {
  process: transform,
};
