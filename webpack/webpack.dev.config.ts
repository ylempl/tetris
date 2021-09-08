import path from "path";
import webpack from 'webpack';
import { merge } from "webpack-merge";
import common from "./webpack.config";

const dev = merge<webpack.Configuration>(common, {
    mode: "development",
    devtool: "cheap-module-source-map",
    // entry: [
    //     './node_modules/regenerator-runtime/runtime.js'
    // ],
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        open: true,
        port: 1337
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

export default dev;
