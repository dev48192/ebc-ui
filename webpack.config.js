const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = async (_, { stats, mode = 'development' }) => {
  const isDev = mode === 'development';
  return {
    mode,
    entry: ["regenerator-runtime/runtime.js", "./src/index.tsx"],
    output: {
      path: resolve(__dirname, "build"),
      publicPath: "auto",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    ...(isDev && {
      devServer: {
        port: 3002,
        historyApiFallback: true,
        hot: true,
        open: true,
      },
    }),
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.module\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|svg)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
      }),

      new DotenvWebpackPlugin({
        path: resolve(__dirname, 'config', mode, '.defined.urls'),
      })
    ],
  }
};
