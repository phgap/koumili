const { smart } = require('webpack-merge')
const base = require('./webpack.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const path = require('path')

module.exports = smart(base, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin()
    ]
})