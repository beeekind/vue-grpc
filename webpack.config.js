var path = require('path');
var webpack = require('webpack');
var outputFileName = 'bundle';

var config = {
    //context: path.resolve(__dirname, './'),

    entry: path.resolve(__dirname, './client/index.ts'),

    output: {
        // output to './dist' folder
        path: path.resolve(__dirname, './dist'),

        // with filename
        filename: outputFileName + '.js',

        // mark /dist/ folder as a public path so index.html can reach it
        publicPath: '/dist/'
    },

    // webpack-dev-server config, see: https://webpack.github.io/docs/webpack-dev-server.html
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        port: 8080
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: '#eval-source-map',

    resolve: {
        extensions: ['.ts', '.js', '.jade'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },

    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' },
            { test: /\.jade$/, loader: 'jade-loader' },
            {
                test: /\.ts?$/,
                include: /client/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },

    plugins: [
        // HMR issue, see: https://github.com/webpack/webpack/issues/1151
        new webpack.HotModuleReplacementPlugin()
    ]

};

module.exports = config;
