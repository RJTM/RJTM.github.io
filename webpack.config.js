const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader", exclude: /node_modules/},
            { test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    query: {
                        progressive: true,
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        }
                    }
                }
                ]
            }
        
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}