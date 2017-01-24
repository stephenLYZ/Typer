const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app:  './src/App',
    vendor: ["history", "qs", "react", "react-dom","react-router","whatwg-fetch"]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'typer.min.js',
    publicPath: '/static/'
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
    extensions: ['', '.js', '.jsx','.scss']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('typer.css')
  ]
}
