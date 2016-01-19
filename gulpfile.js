var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  browserify = require('browserify'),
  plumber = require('gulp-plumber'),
  vueify = require('vueify'),
  fs = require('fs');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('browserify', function() {
  return browserify('./src/app.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("./dist/app.production.js"));
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
    gulp.watch('assets/less/*.less', ['less']);
    gulp.watch('src/app.js', ['browserify']);
})

gulp.task('default', ['less', 'browserify', 'webserver', 'watch']);
