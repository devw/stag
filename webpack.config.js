const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
    entry: env?.in || './src/app.js',
    output: {
        filename: env?.out || 'bundle.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});
