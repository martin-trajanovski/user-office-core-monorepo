const { CracoAliasPlugin } = require('react-app-alias-ex');

const options = {}; // default is empty for most cases

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: options,
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      // ts-loader is required to reference external typescript projects/files (non-transpiled)
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      });

      return webpackConfig;
    },
  },
};
