/* eslint-env amd, node, browser:false */
/* eslint "@typescript-eslint/no-var-requires": 0 */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
});
