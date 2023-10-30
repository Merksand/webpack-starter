const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');// Para ofuscar codigo css
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /style\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                },
            },
        ]
    },//Para ofuscar css
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },//Para ofuscar css
    
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            //filename: '[name].[contenthash].css', //El contentHash para prevenir que el navegador mantenga el archivo en el cache
            filename: '[name].css',
            ignoreOrder: false, /*Para no servir los warning  */
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets/'
                }
            ]
        })
    ]
}

