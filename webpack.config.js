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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ya?ml$/,
                type: "json", // Required by Webpack v4
                use: "yaml-loader",
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
