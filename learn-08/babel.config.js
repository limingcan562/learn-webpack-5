const presets = [
    [
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            corejs: {
                version: require('core-js/package.json').version,
                proposals: true
            }
        }
    ]
];
const plugins = [
    '@babel/plugin-transform-runtime',
];
module.exports = {presets, plugins}