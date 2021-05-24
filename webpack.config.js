const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "VILNIAUS RYTAS",
      template: "src/template.html",
    }),
  ],
};
