const { smart } = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = smart(base, {
    entry: {
        mock: path.resolve(__dirname, '../', 'src/mock/index.js'),
        home: path.resolve(__dirname, '../', 'src/index.js')
    },
    mode: "development",
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public/index.html'),
            filename: 'index.html',
            chunksSortMode: 'manual',
            chunks: ['mock', 'home']
        })
    ],
})