const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    port: 9000,
    quiet: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
