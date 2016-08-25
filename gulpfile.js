'use strict';

const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      open: true
    }));
});
