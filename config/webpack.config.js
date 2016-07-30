const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/** postcss */
const autoprefixer = require('autoprefixer');
const precss = require('precss');

/** config */
const cfg = require('./config.js');

module.exports = {
    context: cfg.dir.app,
    entry: {
        vendor: [ 'normalize.css', 'vue' ],
        app: './app.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: cfg.dir.build,
        publicPath: cfg.public
    },
    resolve: {
        extensions: [ '', '.js', '.vue' ],
        fallback: [ cfg.dir.modules ],
        alias: { assets: cfg.dir.asset.image }
    },
    resolveLoader: {
        fallback: [ cfg.dir.modules ]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.css$/,
                loader: ExtractPlugin.extract('style', 'css')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: '[path][name].[ext]',
                    content: cfg.dir.asset.image
                }
            }
        ]
    },
    vue: {
        postcss: [ precss ],
        autoprefixer: true,
        html: {
            attrs: [
                'img:src',
                'link:href',
                'use:xlink:href'
            ]
        },
        loaders: {
            css: ExtractPlugin.extract('css-loader?sourceMap')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new HTMLPlugin({
            title: cfg.name,
            template: 'index.html',
            filename: 'index.html',
            inject: true
        }),
        new ExtractPlugin('[name].bundle.css', {
            allChunks: true
        })
    ]
};
