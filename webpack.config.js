const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
       home: './src/DOMloader.js',
       menu: './src/menu.js',
       contact: './src/contact.js',
       index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};