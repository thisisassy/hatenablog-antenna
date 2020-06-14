const gulp = require('gulp');
const less = require('gulp-less');
const bs = require('browser-sync');

gulp.task('serve', function () {
    bs.init({
        server: './dest',
        open: false,
        port: 3030,
        ui: {
            port: 3031,
        },
    });
    gulp.watch('src/**/*.less', gulp.parallel('less'));
});

gulp.task('less', function () {
    return gulp
        .src(['src/*.less'], ['!src/_*.less'])
        .pipe(less({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dest'))
});

gulp.task('default', gulp.parallel('serve'));

