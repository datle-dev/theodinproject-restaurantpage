const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        static: './dist',
        watchFiles: [
            './src/**/*.html',
            './src/**/*.css',
            './src/**/*.js',
        ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'src/assets/[name].[ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Development',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};