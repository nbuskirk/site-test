var webpack = require('webpack');
var path = require('path');
var jade = require('react-jade');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [APP_DIR + '/index.jsx','file?name=index.html!jade-html!./src/index.jade'],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.jade$/,
        include : 'index.jade',
        loader: "jade"
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

    ]
  }
};

module.exports = config;
