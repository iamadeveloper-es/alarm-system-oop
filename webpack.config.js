const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ts/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
              { from: './src/images/', to: 'images/' },
            ],
          }),
    ],
    resolve: {
        extensions: [
            ".ts"
        ]
    },
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, './build'),
    }
};
