const path = require("path");

module.exports = {
  entry: ['./src/js/menu.js'],
  mode: 'development',
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'script.js'
    }
}