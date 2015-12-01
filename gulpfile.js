var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  browserify = require('gulp-browserify'),
  plumber = require('gulp-plumber'),
  fs = require('fs');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function() {
  if( fs.existsSync('assets/css/style.css')){
    fs.unlink('assets/css/style.css');
  }

  gulp.src('assets/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
})

gulp.task('default', ['less', 'webserver', 'watch']);
