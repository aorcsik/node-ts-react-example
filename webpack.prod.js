/* eslint-env amd, node, browser:false */
/* eslint "@typescript-eslint/no-var-requires": 0 */

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
});
