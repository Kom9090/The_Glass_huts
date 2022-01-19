const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
const app = require('../config/app.js');
//plugins
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const webpCss = require('gulp-webp-css');

//scss task 
const scss = () => {
    return src(path.scss.src, { sourcemaps: false })
        .pipe(sass())
        .pipe(webpCss())
        .pipe(src(path.scss.lib))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(dest(path.scss.docs, { sourcemaps: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(dest(path.scss.docs, { sourcemaps: false }))
}

module.exports = scss;