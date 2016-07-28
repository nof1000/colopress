const webpack = require('webpack');
const merge = require('webpack-merge');

const base = require('./webpack.config.js');

module.exports = merge(base, {
    devtool: '#eval-source-map',
    devServer: { hot: true },
    entry: {
        hot: [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('"development"')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
