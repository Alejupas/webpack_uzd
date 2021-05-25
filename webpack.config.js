const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  devtool: "source-map",

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true, //css reload be refresh
    watchOptions: {
      poll: true,
    },
  },
  entry: {
    main: path.join(__dirname, "./src/index.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
      templateParameters: {
        title: "Here title",
        mainTitle: "GERA RYTA",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
};
