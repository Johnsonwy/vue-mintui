/*
 * @Author: shixinghao 
 * @Date: 2017-12-25 16:07:35 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-25 16:23:58
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: config.dev.port,
        host: config.dev.host,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});