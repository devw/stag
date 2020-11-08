const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.ya?ml$/,
                type: "json", // Required by Webpack v4
                use: "yaml-loader",
            },
            {
                test: /\.json5$/i,
                loader: "json5-loader",
                options: {
                    esModule: false,
                },
                type: "javascript/auto",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
        }),
        new NodemonPlugin(),
    ],
};
