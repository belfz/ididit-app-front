var path = require('path');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_DEV || "0");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    main: './src/main.js'
  }, 
  debug: true,
  devtool: 'eval-source-map',
  output: {
    path: './dist',
    filename: 'bundle.min.js',
    sourceMapFilename: '[name].js.map'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('commons.chunk.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    loaders: [
      {
        test: /.+.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader')
      }
    ]
  },
  postcss: function () {
        return [autoprefixer({browsers: ['last 2 versions']})];
    }
};
