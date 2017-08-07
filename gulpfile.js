var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// 编译 sass
gulp.task('css', function () {
  gulp.src('./packages/index.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
      }))
      .pipe(cleanCSS())
      .pipe(rename('index.css'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css']);
