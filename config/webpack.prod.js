const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')

const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].[chunkhash:3].js',
    clean: true
  },
  optimization: {
    minimize: false,
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ],
    runtimeChunk: { name: 'runtime', },
    splitChunks: { chunks: "all" }
  },
  performance: {
    hints: true,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
