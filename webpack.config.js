const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: `${SRC_DIR}/index.js`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        include : SRC_DIR,
        loaders: ['style-loader', 'css-loader?modules=true']
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};