const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, './resources/js'),
      '@components': path.join(__dirname, './resources/js/components'),
      '@plugins': path.join(__dirname, './resources/js/plugins'),
      '@router': path.join(__dirname, './resources/js/router'),
      '@store': path.join(__dirname, './resources/js/store'),
      '@design': path.join(__dirname, './resources/js/design'),
      '@middleware': path.join(__dirname, './resources/js/middleware'),
      '@views': path.join(__dirname, './resources/js/views'),
      '@layouts': path.join(__dirname, './resources/js/layouts')
    }
  },
  plugins: [
    ...(production
      ? [
          new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          })
        ]
      : [])
  ],
  output: {
    chunkFilename: production
      ? 'js/chunks/[contenthash:8].chunk.js'
      : 'js/chunks/[name].chunk.js'
  }
}
