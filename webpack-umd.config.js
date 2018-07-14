const path = require('path')

module.exports = function (env) {
  let minimize = env && env.hasOwnProperty('minimize')

  let config = {
    mode: 'production',
    entry: {
      TransformationMatrix: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
      path: path.join(__dirname, 'build-umd'),
      filename: `transformation-matrix${minimize ? '.min' : ''}.js`,
      library: 'TransformationMatrix',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }]
    },
    optimization: {
      minimize: Boolean(minimize)
    }
  }
  return config
}
