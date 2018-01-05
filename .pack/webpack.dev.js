const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const {distPath} = require('./path.config');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: distPath,
    publicPath: '/',
    filename: '[name].dev.js',
    chunkFilename: '[name].dev.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].dev.css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
