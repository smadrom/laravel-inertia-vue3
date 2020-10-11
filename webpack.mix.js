const mix = require('laravel-mix')

//mix.disableNotifications()
//mix.disableSuccessNotifications()

mix.browserSync('localhost:8000')

mix.js('resources/js/app.js', 'public/js').vue({version: 3})
mix.sass('resources/sass/app.scss', 'public/css')

mix.webpackConfig(require('./webpack.config'))
