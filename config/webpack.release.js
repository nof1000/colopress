const webpack = require('webpack');
const merge = require('webpack-merge');

const base = require('./webpack.config.js');

module.exports = merge(base, {
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('"production"')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
});
