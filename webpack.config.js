'use strict';

const path              = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry    : './client/js/web-animation.js',
    output   : {
        path       : path.resolve('www/'),
        publicPath : '',
        filename   : 'bundle.js'
    },
    devtool  : 'source-map',
    resolve  : {
        extensions : ['.js']
    },
    module   : {
        rules : [
            {
                test    : /\.css$/,
                include : [
                    path.resolve('client'),
                    path.resolve('node_modules/normalize'),
                    path.resolve('node_modules/font-awesome')
                ],
                use    : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test    : /\.scss$/,
                include : [
                    path.resolve('client')
                ],
                use : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test    : /\.js$/,
                include : [
                    path.resolve('client')
                ],
                use  : [
                    'ng-annotate-loader',
                    'babel-loader'
                ]
            },
            {
                test   : /\.pug$/,
                use    : 'pug-loader?pretty=true'
            },
            {
                test   : /\.html$/,
                use    : 'raw-loader'
            },
            {
                test   : /\.(png|jpg|jpeg|gif|svg)$/,
                use    : 'file-loader?name=./img/[hash].[ext]'
            },
            {
                test   : /\.(svg|woff|woff2|ttf|eot)$/,
                use    : 'url-loader?name=/font/[name].[hash].[ext]'
            },
            // helps to load bootstrap's css.
            // {
            //     test   : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //     use    : 'file-loader?limit=8192&mimetype=application/font-woff&name=/font/[name].[hash].[ext]'
            // },
            // {
            //     test   : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            //     use    : 'file-loader?limit=8192&mimetype=application/font-woff&name=/font/[name].[hash].[ext]'
            // },
            // {
            //     test   : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     use    : 'file-loader?limit=8192&mimetype=application/octet-stream&name=/font/[name].[hash].[ext]'
            // },
            // {
            //     test   : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     use    : 'file-loader?name=/font/[name].[hash].[ext]'
            // },
            // {
            //     test   : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     use    : 'file-loader?limit=8192&mimetype=image/svg+xml&name=/font/[name].[hash].[ext]'
            // }
        ]
    },
    plugins : [
        new CopyWebpackPlugin([
            {
                from : 'client/img',
                to   : 'img'
            }
        ])
    ]
};
