const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" },
            { test: /\.css$/, loader: "style!css" }
        ],

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              // This has effect on the react lib size
              'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
