// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new ForkTSCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
      async: false,
      checkSyntacticErrors: true,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    disableHostCheck: true,
    overlay: true,
  },
};
