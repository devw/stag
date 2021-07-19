const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'augment-customize.js',
        library: "augmentCustomize",
    },
};