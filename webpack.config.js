const path = require('path');

module.exports = {
    entry: './src/app.js', //'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //only .js file will be translated
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader', 
                'sass-loader'
            ]//instead of 'loader', which allow run only one loader
        }]
    },
    devtool: "cheap-module-source-map", //source-map which help finding errors
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

//loader - jak webpack widzi js to np. transform with babel 