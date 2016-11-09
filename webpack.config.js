var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js")
    },
    output: {
        path: 'dist',
        filename: '[hash]-[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    plugins: [
            // 输出html文件
            new HtmlWebpackPlugin({
                title: 'webpack配置',
                template: 'src/index.html',
                hash: true
            }),
            // 热替换
            new webpack.HotModuleReplacementPlugin(),
            // 将css文件以link标签引入
            new ExtractTextPlugin('[name].css'),
        ],
        devServer: {
            hot: true,
            host: '0.0.0.0',
            port: 7000,
            historyApiFallback: true
        },
        devtool: "source-map"
}