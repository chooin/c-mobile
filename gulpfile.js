var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    copy = require('gulp-copy')
    del = require('del')

// 编译 sass
gulp.task('css', function () {
  gulp
    .src('./packages/include-variables.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./dist'))
  gulp
    .src(['./dist/packages/index.js', './packages/index.scss'])
    .pipe(gulp.dest('dist/'))
  del(['./dist/packages'])
})

gulp.task('default', ['css'])
