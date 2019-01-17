const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/, // 将不需要装换的文件夹排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'] // 自动根据环境打包
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 8192, // 文件大于8k被当做文件
                            name: 'resource/[name].[ext]'
                        } 
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 8192, // 文件大于8k被当做文件
                            name: 'resource/[name].[ext]'
                        } 
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'// 引用自定义html文件
        }), // 生成html5文件
        new ExtractTextPlugin('css/[name].css'), // 将样式单独打包出来生成新的css页面
        // 提出公共模块,webpack自带
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',// 手动指定的通用木块
            filename: 'js/base.js'
        })
    ],
    // webpack-dev-server自动刷新
    devServer: {
        // contentBase: './dist'
    }
}