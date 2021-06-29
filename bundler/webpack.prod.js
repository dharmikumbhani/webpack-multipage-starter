const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const optimizations = {
    minimize: true,
    minimizer:[
        // https://webpack.js.org/plugins/terser-webpack-plugin/
        new TerserPlugin({
            parallel: true
        }),
        // https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
        new CssMinimizerPlugin()
    ],
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/].*\.js$/,
                chunks: "all",
                priority: 1
            }
        }
    }
}

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',

        optimization: optimizations,

        plugins:
        [
            new CleanWebpackPlugin()
        ]
    }
)
