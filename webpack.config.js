const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: {
    main: `${APP_PATH}/script/app.js`,
    angular: ['angular'],
    uiRouter: ['ui-router']
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH
      }, {
        test: /\.html$/,
        loader: 'raw',
        include: APP_PATH
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // vender: webpack的引导js,会定义相应webpack方法,
      // 使用commonsChunkPlugin会在names列表的最后一个参数中定义,使用的方法
      name: ['angular', 'uiRouter', 'vender'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'app/index.html',
      chunksSortMode: (function chunksSortMode() {
        const sortMode = {
          vender: 1,
          angular: 2,
          uiRouter: 3
        };

        return (a, b) => {
          const sortValA = sortMode[a.names[0]] || 1000;
          const sortValB = sortMode[b.names[0]] || 2000;
          console.log(sortValA, a.names[0]);
          console.log(sortValB, b.names[0]);
          return sortValA - sortValB;
        };
      }())
    })
  ],

  devServer: {
    contentBase: DIST_PATH,
    // historyApiFallback: true,
    // hot: true,
    // inline: true,
    port: 9018
  },

  devtool: 'source-map'

};
