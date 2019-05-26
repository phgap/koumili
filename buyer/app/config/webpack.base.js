const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: path.resolve(__dirname, '../', 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../', 'build'),
        filename: 'static/js/[name]_[hash].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public/index.html'),
            filename: 'index.html',
            chunks: ['home']
        })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            exclude: /node_modules/,
            use: [
                "url-loader"
            ]
        }]

    }

}