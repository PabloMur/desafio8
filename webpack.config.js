const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        type: "asset",
        test: /\.(png|jpg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
