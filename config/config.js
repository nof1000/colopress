const path = require('path');
const pkg = require('../package.json');

module.exports = {
    name: pkg.name,
    version: pkg.version,
    public: '/',
    dir: {
        modules: path.resolve(__dirname, '../node_modules'),
        build: path.resolve(__dirname, '../build'),
        root: path.resolve(__dirname, '../'),
        app: path.resolve(__dirname, '../app'),

        asset: {
            image: path.resolve(__dirname, '../app/asset/image'),
        }
    }
};
