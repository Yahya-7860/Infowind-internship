const path = require('path');

module.exports = {
    entry: "./assests/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};  