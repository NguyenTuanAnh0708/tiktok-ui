const { override, useBabelRc } = require("customize-cra");
module.exports = override(
  //do stuff with the webpack config...
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
