const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

//config
const path = require('./config/path.js');

//============================================================
//================tasks
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
// const pug = require('./tasks/pug.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');
const font = require('./tasks/font.js');
const favicon = require('./tasks/favicon.js');

//=============================================================
//===============server task
const server = () => {
        browserSync.init({
            server: {
                baseDir: path.root
            }
        });
}

//=============================================================
//=============watch task 
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    // watch(path.pug.watch, pug).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
    watch(path.favicon.watch, favicon).on('all', browserSync.reload);
}


exports.html = html;
// exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.favicon = favicon;

//=============================================================
//================exports dev
exports.default = series(
    clear,
    parallel(html, scss, js, img, font, favicon),
    // pug,
    parallel(watcher, server),
);

