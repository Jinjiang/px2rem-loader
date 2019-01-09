module.exports = {

  mode: 'development',

  entry: './main.js',
  output: {
    filename: 'example.js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'px2rem-loader',
        // // options here
        // options: {
        //   remUnit: 75,
        //   remPrecision: 8
        // }
      }]
    }]
  }
}
