const { CracoAliasPlugin } = require('react-app-alias-ex');

const options = {}; // default is empty for most cases

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: options,
    },
  ],
};
