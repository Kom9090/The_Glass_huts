const del = require('del');
//config
const path = require('../config/path.js');

//===============clear task
const clear = () => {
    return del(path.root)
}

module.exports = clear;