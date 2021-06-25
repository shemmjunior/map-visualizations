const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/base.js',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Dar es Salaam BRT Routes',
      template: './src/index.html',
      filename: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "geojson/*.geojson", to: "" },
        { from: "layers/*.json", to: "" },
      ],
    }),

  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
};