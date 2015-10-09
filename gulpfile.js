var gulp = require('gulp');
var ejs = require('gulp-ejs');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('html', function() {
  gulp.src("./app/pages/*.ejs")
    .pipe(ejs({
        msg: "Hello Gulp!"
    }))
    .pipe(gulp.dest("./dist"));
});
