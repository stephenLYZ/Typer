const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: [
        'webpack-hot-middleware/client',
        './src/App'
      ],
    vendor: ["history", "qs", "react", "react-dom","react-router","whatwg-fetch"] 
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'typer.min.js',
    publicPath: '/dist/'
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
	      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ],
  },
  resolve: {
    	extensions: ['', '.js','.jsx', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warning: false,
    }),
    new ExtractTextPlugin('typer.css')
  ]

}
