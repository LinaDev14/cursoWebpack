const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true,
                    },
                }],
            },
            {
                test: /\.css$/i,
                /* use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ] */
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "./"
                    }
                }, "css-loader"]
            },
            {
                test: /\.(jpg|png|gif|svg|webp|jpeg)$/i,
                use: [
                    "file-loader?name=assets/[name].[ext]"
                ]
            },

            {
                test: /\.(woff)$/i,
                use: [
                    "file-loader?name=assets/[name].[ext]"
                ]
            }

        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),

        new MiniCssExtractPlugin(),
    ],
};