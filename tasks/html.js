const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
const app = require('../config/app.js');
//plugins
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

//===============html task
const html = () => {
    return src(path.html.src)
        .pipe(fileinclude())
        .pipe(htmlmin(app.htmlmin))
        .pipe(dest(path.html.docs))
}

module.exports = html;