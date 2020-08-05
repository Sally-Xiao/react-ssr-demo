var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

const serverConfig = {
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
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
};

const browserConfig = {
    entry: './src/browser/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

module.exports = [
    browserConfig,
    serverConfig
]