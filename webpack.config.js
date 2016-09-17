const [ webpack, path ] = [
    require('webpack'),
    require('path')
];

const [ SRC_DIR, PUBLIC_DIR ] = [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'public')
];

module.exports = {
    entry: path.resolve(SRC_DIR, 'index.jsx'),
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel'
            },
        ],
    },
};
