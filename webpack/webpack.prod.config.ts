import * as path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.config";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const prod = merge<webpack.Configuration>(common, {
    mode: "production",
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.[contenthash].min.js'
    },
    optimization: {
        minimize: true
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    ]
});

export default prod;
