const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  // devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "final.bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
    new ImageMinimizerPlugin({
      filename: "images/[name].webp",
      deleteOriginalAssets: true,
      minimizerOptions: {
        plugins: [
          ["imagemin-webp"],
          ["svgo"],
          ["gifsicle"],
          ["pngquant"],
          ["mozjpeg", { quality: 50 }],
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "VILNIAUS RYTAS",
      template: "src/template.html",
    }),
  ],
};
