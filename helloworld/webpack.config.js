const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    // 模块
    module: {
        rules: [{
            // css
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // 资源文件
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            // 资源文件
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}