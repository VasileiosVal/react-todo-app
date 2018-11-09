const path = require('path');


module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'scripts/bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map'    // devtool: 'cheap-module-eval-source-map',    //devtool: 'source-map',         gia production

}; 