const mix = require('laravel-mix')
const config = require('./webpack.config')
require('laravel-mix-vue-css-modules')
require('laravel-mix-eslint')

mix
  .sass('resources/js/design/app.scss', 'public/css')
  .js('resources/js/app.js', 'public/js')
  .webpackConfig(config)
  .options({ terser: { extractComments: false } })
  .vueCssModules({
    oneOf: true,
    preProcessor: { scss: true }
  })
  .eslint({ fix: true })
  .autoload({
    jquery: ['$', 'jQuery', 'window.jQuery']
  })

mix.inProduction() ? mix.version() : mix.sourceMaps(true, 'source-map')
