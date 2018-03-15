const path = require('path');
let webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const buildPath = path.resolve(__dirname, 'build');

var config = {
    entry: './src/index.js',
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
     plugins: [
        new cleanWebpackPlugin([buildPath]),
        new copyWebpackPlugin([
            { from: path.join(__dirname, '/src/manifest.json'), to: buildPath },
            { from: path.join(__dirname, '/src/css/main.css'), to: path.join(buildPath) },
            { from: path.join(__dirname, '/src/index.html'), to: buildPath }
            // { from: path.join(__dirname, '/src/images'), to: path.join(buildPath, '/images') }
        ]),
        //new webpack .optimize .UglifyJsPlugin({minimize: true})
    ]
}
module.exports = config;