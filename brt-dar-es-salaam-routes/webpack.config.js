const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Dar es Salaam BRT Routes',
      template: './src/index.html',
      filename: './index.html'
    }),

  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
};