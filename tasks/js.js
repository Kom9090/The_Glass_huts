const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
const app = require('../config/app.js');
//plugins
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

//js task 
const js = () => {
    return src(path.js.src, { sourcemaps: false })
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.docs, { sourcemaps: false }))
}

module.exports = js;