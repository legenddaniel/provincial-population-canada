const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    corejs: '3.6.5',
                                    // targets: {
                                    //     chrome: '62',
                                    //     firefox: '57',
                                    //     safari: '9',
                                    //     ie: '10',
                                    //     edge: '12'
                                    // }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            esModule: false
                        }
                    },
                ],
            },
        ],
    },
};