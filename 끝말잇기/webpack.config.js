const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { // preset-env 추가 option 방법.
                        targets: {
                            browsers: ['> 1% in KR']
                        },
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['react-hot-loader/babel'],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }), // rules에 debug option true 해주는 플러그인
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
};