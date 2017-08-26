var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'build/bundle.js'
  },
  module : {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body',
      filename: 'build/index.html'
    })
  ]
}