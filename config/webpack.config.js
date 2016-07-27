const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/** config */
const cfg = require('./config.js');

module.exports = {
    context: cfg.dir.app,
    entry: {
        vendor: [''],
        app: './app.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: cfg.dir.build,
        publicPath: cfg.public
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
