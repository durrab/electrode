const mergeWebpackConfig = require("webpack-partial").default;

var urlLoader = require.resolve("url-loader");

module.exports = () => (config) => mergeWebpackConfig(config, {
  module: {
    loaders: [{
      name: "images",
      test: /\.(png|jpg|svg|gif)$/,
      loader: urlLoader
    }]
  }
});
