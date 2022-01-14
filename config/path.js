const pathSrc = "./src";
const pathDocs = "./docs";

module.exports = {
    root: pathDocs,

    html: {
        src: pathSrc + "/*.html",
        watch: pathSrc + "/**/*.html",
        docs: pathDocs
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        docs: pathDocs
    },

    scss: {
        src: pathSrc + "/scss/*.{sass,scss}",
        lib: pathSrc + "/libs/*.{sass,scss}",
        watch: pathSrc + "/scss/**/*.scss",
        docs: pathDocs
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        docs: pathDocs
    },

    img: {
        src: pathSrc + "/images/*.{jpeg,jpg,png,svg,webp,gif}",
        watch: pathSrc + "/images/**/*.{jpeg,jpg,png,webp,svg,gif}",
        docs: pathDocs + "/images"
    },

    font: {
        src: pathSrc + "/fonts/*.{eot,ttf,otf,woff,woff2,svg}",
        watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,woff,woff2,svg}",
        docs: pathDocs + "/fonts"
    },

    favicon: {
        src: pathSrc + "/favicons/*",
        watch: pathSrc + "/favicons/**/*",
        docs: pathDocs + "/favicons"
    },

}