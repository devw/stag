const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

let config = {
    entry: './src/app.js',
    output: {
        filename: 'script.js',
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
};

module.exports = (_, argv) => {
    const mode = argv.mode || 'production';
    console.log('mode:', mode);

    const environment = {
        development: {
            S3_CONFIGURATIONS:
                'https://login-popup-dev-configs.s3.amazonaws.com',
        },
        production: {
            S3_CONFIGURATIONS:
                'https://login-popup-prod-configs.s3.amazonaws.com',
        },
    };

    config.plugins = [
        new MiniCssExtractPlugin(),
        new EnvironmentPlugin({
            NODE_ENV: mode,
            ...environment[mode],
        }),
    ];
    return config;
};
