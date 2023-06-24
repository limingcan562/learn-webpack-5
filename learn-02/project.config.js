module.exports = {
    entry: {
        index: './src/index.js',
        share: './src/share.js'
    },
    output: {
        filename: '[name]-bundle.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: "common",
                    chunks: "initial",
                    minSize: 1,
                    priority: 0,
                    minChunks: 2,
                },
            }
        }
    }
}