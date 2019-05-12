var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function style() {
  return gulp
    .src(['sass/plugins.scss', 'sass/style.scss'])
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function script() {
  return gulp
    .src('./bundle/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(plumber())
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./bundle/*.js', script);
}

exports.style = style;
exports.script = script;
exports.default = watch;