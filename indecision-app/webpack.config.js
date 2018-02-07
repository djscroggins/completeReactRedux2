const path = require('path');

// Exposes object to other file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // Setting up loader for babel
    module: {
        rules: [{
            loader: 'babel-loader',
            // What files do we actually want to run this on?
            // Does the file end in .js
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
    // devtool: 'cheap-module-eval-source-map'
    // devtool: 'cheap-module-source-map'
    , devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader
// yarn add babel-core@6.25.0 babel-loader@7.1.1
// similar to babel-cli except it allows you to run babel from tools such as webpack; babel-loader teach webpack how to load babel


// After loader set up, must add .babelrc to root of project and specify presets
