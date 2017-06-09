'use strict';

let webpackDevConfig    = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

webpackDevConfig
    .output
    .filename = '[name].[hash].js';

webpackDevConfig
    .devtool = 'source-map';

webpackDevConfig
    .module
    .rules[0]
    .use = ExtractTextPlugin.extract({
        fallback : 'style-loader',
        use      : 'css-loader'
    });

webpackDevConfig
    .module
    .rules[1]
    .use = ExtractTextPlugin.extract({
        fallback : 'style-loader',
        use      : [
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
    });

webpackDevConfig
    .plugins
    .push(
        new HtmlWebpackPlugin({
            template : './server/views/index.pug',
            inject   : 'head'
        })
    );

webpackDevConfig
    .plugins
    .push(
        new ExtractTextPlugin('styles.[hash].css')
    );

webpackDevConfig
    .plugins
    .push(
        new CopyWebpackPlugin([
            {
                from : 'client/res',
                to   : 'res'
            },
            {
                from : 'client/icon.png'
            }
        ])
    );

module.exports = webpackDevConfig;
