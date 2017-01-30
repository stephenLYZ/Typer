const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = '$config'

module.exports = {
  entry: {
    app:  './src/App',
    vendor: ["history", "qs", "react", "react-dom","react-router","whatwg-fetch"]
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'typer.[hash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
	      exclude: /node_modules/,
	      loader: 'style!css!sass'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.scss']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[hash:8].js"),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: config.title,
      filename: 'index.html',
      template: './src/template/index.ejs',
      config: config,
      inject: 'body',
      hash: false
    })
  ]
}
