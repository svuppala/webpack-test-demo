const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const packageJson = require('./package.json');

module.exports = (env, argv) => {
  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/bin')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist/bin']),
      new ZipPlugin({
        filename: `${packageJson.name}-${packageJson.version}-${argv.branch}.zip`,
        pathPrefix: `${packageJson.name}-${packageJson.version}-${argv.branch}`
      })
    ]
  }
};
