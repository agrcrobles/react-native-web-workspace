const webpack = require('webpack');

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, './index.js')
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname, 'index.js'),
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-native-tab-view'),
          path.resolve(__dirname, './node_modules/react-navigation-playground'),
          path.resolve(__dirname, './node_modules/components')
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      },

    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    })
  ],
  resolve: {
    symlinks: false, // otherwise components won't find the preset
    alias: {
      'react-navigation': 'react-navigation/lib/react-navigation.js',
      'react-native': 'react-native-web'
    }
  }
};
