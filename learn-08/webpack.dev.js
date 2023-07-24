const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[chunkhash:5].js',
    },
    module: {
        rules: [
            {
                test: /.(css|less)$/, 
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: '[name]-[hash:5][ext]' // Set the name of the output file
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024 * 10 // When the image size is < 10kb it will be converted to base64
                    }
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/[name].html'),
            template: path.resolve(__dirname, './src/index.html'),
            title: 'webpack.dev.config',
        })
    ],
    devServer: {
        static:  './static',
    },
}