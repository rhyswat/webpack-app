const path = require('path');

const SRC = path.resolve(__dirname, 'src');
const WWW = path.resolve(__dirname, 'www');


module.exports = {
    entry: path.join(SRC, 'js', 'app.js'),
    output: {
        path: path.join(WWW, 'js'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.(jpg|png)$/,
            loader: 'file-loader?name=../images/[name].[ext]'
        },

        /* for bootstrap */
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file-loader?name=../fonts/[name].[ext]'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]'
        }
        ]
    }
}