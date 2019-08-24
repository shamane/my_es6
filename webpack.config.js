const path = require('path')

module.exports = {
  entry: './testing.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
    }]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
}
