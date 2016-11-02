/// <binding />
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: "./Content/React/Index.js",

    output: {
        filename: "./dist/bundle.js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    
    plugins: [
        new WebpackNotifierPlugin()
    ]
};