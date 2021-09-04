const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', //'cheap-module-source-map', // 'source-map', 'none',
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 8081,
    // static: {
    //   directory: paths.public,
    // },
  }
})
