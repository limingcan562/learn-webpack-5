module.exports = {
    entry: {
        index: './src/index.js'
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
        ]
    }
}