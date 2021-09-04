const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const paths = require('./paths')

module.exports = {
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        exclude: /(node_modules|.vscode|.git|public|test|webpack|_BU)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },

      // IMAGES
      {
        test: /\.(?:ico|gif|png|jpe?g)$/i,
        type: 'asset/resource'
      },

      // FONTS, SVGS
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/,
        type: 'asset/inline'
      },

      // HTML
      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      // EJS
      {
        test: /\.ejs$/,
        loader: 'ejs-webpack-loader'
      },

      // HANDLEBARS
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },

      // PUG
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ],
  },

  // Customize the webpack build process
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.public,
    //       to: 'assets',
    //       globOptions: {
    //         ignore: ['*.DS_Store'],
    //       },
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/chunks/[id].css',
    }),

    // new HtmlWebpackPlugin({
    //   filename: 'page_pug_index.html', // output file
    //   template: paths.src + '/templates_pug/index.pug', // template file
    //   title: 'Internationale Gustav Mahler Gesellschaft',
    //   pageTitle: 'Startseite | IGMG - Internationale Gustav Mahler Gesellschaft',
    //   bodyCss: 'is-startpage',
    //   minify: false,
    //   inject: 'head',
    //   scriptLoading: 'defer'
    // }),

    new HtmlWebpackPlugin({
      filename: 'page_ejs_index.html',
      template: paths.src + '/templates_ejs/index.ejs',
      // title: 'Internationale Gustav Mahler Gesellschaft',
      // pageTitle: 'Startseite | IGMG - Internationale Gustav Mahler Gesellschaft',
      // bodyCss: 'is-startpage',
      // minify: false,
      // inject: 'head',
      scriptLoading: 'deferr'
    }),

    // new HtmlWebpackPlugin({
    //   filename: 'page_html_index.html',
    //   template: paths.src + '/templates_html/index.html',
    //   title: 'Internationale Gustav Mahler Gesellschaft',
    //   pageTitle: 'Startseite | IGMG - Internationale Gustav Mahler Gesellschaft',
    //   bodyCss: 'is-startpage',
    //   minify: false,
    //   inject: 'head',
    //   scriptLoading: 'defer'
    // })
  ],

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
}
