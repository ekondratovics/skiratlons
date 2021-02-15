let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'assets/js/app.js')
.sass('resources/sass/app.scss', 'assets/css/app.css')
.setPublicPath('public');

