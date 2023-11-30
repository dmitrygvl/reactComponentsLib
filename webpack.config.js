const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    // allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new FaviconsWebpackPlugin("src/assets/img/favicon.png"),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|ts)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      // {
      //   test: /\.(ttf|woff|woff2|eot)$/i,
      //   use: ["file-loader"],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
};
