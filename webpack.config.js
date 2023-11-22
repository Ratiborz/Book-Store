const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],

    entry: path.resolve(__dirname, 'src/JS', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'main.js',
        clean: true
      },

    module: {
        rules: [
            { test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ],
    },

    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
    }
}