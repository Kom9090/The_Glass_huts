const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
const app = require('../config/app.js');
//plugins
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
//font task 
const font = () => {
    // src(path.font.src)
    //     .pipe(fonter(app.fonter))
    //     .pipe(dest(path.font.docs))
    return src(path.font.src)
        .pipe(ttf2woff2())
        .pipe(dest(path.font.docs))

}

module.exports = font;