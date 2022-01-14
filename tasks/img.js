const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');
const app = require('../config/app.js');
//plugins


//img task 
const img = () => {
    return src(path.img.src)
        .pipe(dest(path.img.docs))
}

module.exports = img;