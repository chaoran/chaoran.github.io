const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: './app.jsx',
        html: './index.html',
    },

    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.(ttf|eot|svg)$/, loader: "file" }
        ],
    },

    plugins: [
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    ],
};
