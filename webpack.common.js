/* eslint-env amd, node, browser: false */
/* eslint "@typescript-eslint/no-var-requires": 0 */

"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  entry: {
    app: "./src/ts/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "web"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css"
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src/scss"),
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|jpg|gif)/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)(\?v=.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[contenthash][ext]"
        }
      }
    ]
  }
};
