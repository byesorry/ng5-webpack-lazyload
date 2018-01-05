const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { rootPath, distPath, srcPath } = require('./path.config');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: `${srcPath}/tsconfig.json` }
                    }, 'angular-router-loader', 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    minimize: true,
                    removeComments: true,
                    removeOptionalTags: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    sortAttributes: true,
                    sortClassName: true,
                    removeAttributeQuotes: false
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: `${srcPath}/app`,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
            },
            {
                test: /\.(css|scss)$/,
                include: `${srcPath}/app`,
                use: ["raw-loader", {
                    loader: "sass-loader",
                    options: {
                        outputStyle: 'compressed',
                    }
                }]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([`${distPath}/*`], { root: rootPath, verbose: true, dry: false }),

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            srcPath, // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            filename: `${distPath}/index.html?v=[hash:8]`,
            template: `${srcPath}/index.html`,
            inject: true
        })
    ]
};

