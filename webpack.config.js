const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/build/`
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/public/index.html`,
        })
    ]
}