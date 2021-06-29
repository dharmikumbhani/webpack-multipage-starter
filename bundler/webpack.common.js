const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

// https://stackoverflow.com/a/63385300/12268569
let htmlPageNames = ['index', 'about', 'contact'];
//Returns an array of all new HTML Pages instances
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/page-${name}/${name}.html`, // relative path to the HTML files
    inject: true,
    minify: true,
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

//Creating all Entry Points from array
let entryPoints = {}
for (const key of htmlPageNames) {
      entryPoints[key] = path.resolve(__dirname, `../src/page-${key}/${key}.js`);
}

module.exports = {

    entry: entryPoints,

    output:
    {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
     
    devtool: 'source-map',

    plugins:[
        new MiniCSSExtractPlugin(),
        new BundleAnalyzerPlugin(),
    ].concat(multipleHtmlPlugins),

    module: {
        rules: [
            //JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },

            //CSS
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            //HTML Templates
            {
                // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
                resourceQuery: /raw/,
                type: 'asset/source'
            },
            {
                // https://webpack.js.org/loaders/html-loader/#usage
                resourceQuery: /template/,
                loader: 'html-loader'
            },

            // https://webpack.js.org/guides/asset-modules/#resource-assets
            // https://webpack.js.org/guides/asset-management/
            //https://dev.to/smelukov/webpack-5-asset-modules-2o3h
            // Images
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][hash][ext]'
                },
            },

            //Fonts
            {
                test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][hash][ext]'
                },
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                type: 'asset/source'
            }

        ]
    }
}