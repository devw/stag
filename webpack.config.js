const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
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
