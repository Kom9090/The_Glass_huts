const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
//plugins
const pugs = require('gulp-pug');

//===============pug task
const pug = () => {
    return src(path.pug.src)
        .pipe(pugs())
        .pipe(dest(path.pug.docs))
}
exports.pug = pug;

module.exports = pug;