var gulp = require('gulp');
var ejs = require('gulp-ejs');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('html', function() {
  // handle ejs files
  gulp.src('./app/pages/*.ejs')
    .pipe(watch('./app/pages/*.ejs'))
    .pipe(ejs({
        msg: 'Hello Gulp!'
    }).on('error', gutil.log))
    .pipe(gulp.dest('./dist'));
  // handle less files
  gulp.src('./app/style/*.less')
    .pipe(watch('./app/style/*.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS()) //minify CSS files
    .pipe(gulp.dest('./dist/public/style'));
  // handle bower files
  gulp.src(mainBowerFiles())
    .pipe(gulp.dest('./dist/public/bower_components'));

});
