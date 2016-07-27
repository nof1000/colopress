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
        vendor: [ 'vue' ],
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
        fallback: [ cfg.dir.modules ]
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
            }
        ]
    },
    vue: {
        postcss: [ precss ],
        autoprefixer: true,
        loaders: {
            css: ExtractPlugin.extract('vue-style-loader', 'css')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new HTMLPlugin({
            title: cfg.title,
            template: 'index.html',
            filename: 'index.html',
            inject: true
        }),
        new ExtractPlugin('[name].bundle.css', {
            allChunks: true
        })
    ]
};
