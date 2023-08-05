const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[chunkhash:5].js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /.(css|less)$/, 
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024 * 10 // When the image size is < 10kb it will be converted to base64
                    }
                },
                generator: {
                    filename: '[name]-[hash:5][ext][query]' // Set the name of the output file
                }
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
            title: 'Webpack Basic Configuration',
        })
    ],
}