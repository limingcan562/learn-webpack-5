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
                      maxSize: 1024 * 10
                    }
                }
            }
        ]
    }
}