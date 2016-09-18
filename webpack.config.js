module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './bin',
        publicPath: '/bin/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, include: __dirname + '/src', loader: 'babel' },
        ],
    },
};
