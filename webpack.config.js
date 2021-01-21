const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  // for webpack-dev-server 3.x according to issue
  // https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/235
  target: "web",
  plugins: [new ReactRefreshWebpackPlugin(), new HtmlWebpackPlugin({
    templateContent: `
    <html>
      <head><title>baem</title></head>
      <body>
        <div id="root"></div>
      </body>
    </html>
    `
  })],
  devServer: {
    // for webpack-dev-server 3.x
    hot: true,
    contentBase: "./dist",
    // for webpack-dev-server@4.0.0-beta.0
    //static: "./dist"
    liveReload: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
