const { path } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //entry point
  entry: './src/index.tsx',
  mode: 'development',

  //resolve is so that we dont have to put ts tsx js jsx file while importing
  resolve: {
    extensions: ['.tsx', '.jsx', 'js', 'ts'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, //here transpile all the js ts tsx jsx file with babel
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ], // telling webpack to pipe the js ts files through babel. The loader will use Babel to compile modern es6+ files to es5
      },
      {
        //for css files
      },
      {
        //for images files
      },
      {
        //for svg files
      },
    ],
  },

  // for emiting the output when building
  output: {
    path: path.resolve(__dirname, '..', '/build'), //resolve give absolute path
    filename: 'bundle.js',
  },

  //plugin for generating html file and injecting all the bundle to this file.

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', `./public/index.html`),
    }),
  ],
};
