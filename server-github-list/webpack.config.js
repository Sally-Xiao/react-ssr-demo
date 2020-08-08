var nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server/index.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'index.js',
        publicPath: '/'
    },
    target: "node",
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: "babel-loader"
            }
        ]
    }
};