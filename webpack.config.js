const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',

    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].[contenthash].js',
        clean: true
      },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            { test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ],
        optimization: {
            minimizer: [`...`, new CssMinimizerPlugin()],
          }
    },   
}