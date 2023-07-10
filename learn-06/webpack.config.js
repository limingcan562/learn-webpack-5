const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name]-[chunkhash:5].js',
        clean: true
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/[name].html'),
            template: path.resolve(__dirname, './index.html'),
            title: 'HtmlWebpackPlugin',
        })
    ],
}