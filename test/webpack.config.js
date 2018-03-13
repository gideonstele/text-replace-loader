const path = require('path');
const replacements = require('./replacements');

module.exports = {
  context: __dirname,
  entry: `./example.js`,
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: path.resolve(__dirname, '../index.js'),
        options: {
          replacements: replacements.dev
        }
      }
    }]
  }
}
