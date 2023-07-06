module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
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
                    filename: '[name][ext]' // Set the name of the output file
                }
            }
        ]
    }
}