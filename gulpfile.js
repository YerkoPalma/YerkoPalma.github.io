var fs = require('fs')
var gulp = require('gulp')
var connect = require('gulp-connect')
var less = require('gulp-less')
var browserify = require('browserify')
var plumber = require('gulp-plumber')
var vueify = require('vueify')

gulp.task('webserver', function () {
  connect.server({
    livereload: true
  })
})

gulp.task('browserify', function () {
  return browserify('./src/app.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("./dist/app.production.js"))
})

gulp.task('less', function () {
  if (fs.existsSync('assets/css/style.css')) {
    fs.unlink('assets/css/style.css')
  }

  gulp.src('assets/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch('assets/less/*.less', ['less'])
  gulp.watch('src/app.js', ['browserify'])
  gulp.watch('src/components/*.vue', ['browserify'])
})

gulp.task('default', ['less', 'browserify', 'webserver', 'watch'])
