const { resolve } = require('path');
const webpack = require('webpack');

const WEBPACK_PORT = 4000;

module.exports = {
  entry: {
    bundle: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`,
      'webpack/hot/only-dev-server',
      './index.js', //  Entry point in src/js
    ],
  },

  output: {
    filename: '[name].js', //  Output public/
    path: resolve(__dirname, '/public'),
    publicPath: `http://localhost:${WEBPACK_PORT}/public/`, //  Output path for dev
  },

  devtool: 'inline-source-map',

  devServer: {
    port: WEBPACK_PORT,
    hot: true,
    contentBase: resolve(__dirname, '/public'),
    publicPath: `http://localhost:${WEBPACK_PORT}/public/`,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/*': 'http://localhost:8888',
      '/graphql/*': 'http://localhost:8888',
    },
  },

  context: resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
