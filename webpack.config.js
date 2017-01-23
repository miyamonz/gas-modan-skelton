const webpack = require("webpack")
const path = require("path")

module.exports = [
    {
    entry: {
        "index": "./src/index.js",
    },
    output: {
        path: path.join(__dirname, "bundle"),
        filename: "[name].js"
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.html$/, loader: "file?name=[name].[ext]"},
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ["es2015", "react"]
                }
            },
        ]
    }
}
];
