import gulp from 'gulp';
import gutil from 'gulp-util';
import webserver from 'gulp-webserver';
import open from 'gulp-open';
import babel from 'gulp-babel';
import mocha from 'gulp-spawn-mocha';

const src = 'src/';
const port = 3000;


gulp.task('babel', () => gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist')));

gulp.task('default', () => {
  return gutil.log('Gulp is Running');
});

gulp.task('serve', ['babel'], () => gulp.src(src).pipe(webserver({
    port: port
  }))
  .pipe(open({
    uri: 'http://localhost:' + port
  })));

gulp.task('mocha', ['babel'], () => gulp.src('test/*.js')
    .pipe(mocha()));
