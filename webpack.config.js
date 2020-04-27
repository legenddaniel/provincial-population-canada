const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: {
                                        version: 3
                                    },
                                    targets: {
                                        chrome: '62',
                                        firefox: '57',
                                        safari: '9',
                                        ie: '9',
                                        edge: '12',
                                    }
                                }
                            ]
                        ]
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath: 'img/',
                        publicPath: 'dist/img/',
                        useRelativePath: true,
                        esModule: false
                    }
                }
            }
        ]
    }
}