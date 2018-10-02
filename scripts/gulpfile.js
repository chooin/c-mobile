var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('task', function () {
  gulp
    .src('../packages/include-variables.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('../dist'));
  gulp
    .src([
      '../packages/index.scss'
    ])
    .pipe(gulp.dest('../dist'));
});

gulp.task('default', ['task']);
