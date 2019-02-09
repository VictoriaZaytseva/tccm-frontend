var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// TODO: setup automatic refresh just to teach Lena node js
gulp.task("default", function () {

  return browserify('index.js')
        .transform('babelify', {
            presets: ["@babel/preset-env"]
        })
        .bundle()
        .pipe(source('app.js')) // Converts To Vinyl Stream
        .pipe(buffer()) // Converts Vinyl Stream To Vinyl Buffer
        // Gulp Plugins Here!
        .pipe(gulp.dest('dist'));
})
