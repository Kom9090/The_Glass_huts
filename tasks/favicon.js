const { src, dest } = require('gulp');
//config
const path = require('../config/path.js');

//js task 
const favicon = () => {
    return src(path.favicon.src)
        .pipe(dest(path.favicon.docs,))
}

module.exports = favicon;