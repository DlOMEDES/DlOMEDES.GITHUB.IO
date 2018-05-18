'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    // PATHS
    sassIn = './assets/sass/**/*.sass',
    cssOut = './dist/css';

// COMPILE CSS TASK
gulp.task('sass', function() {
 return gulp.src(sassIn)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(cssOut))
            .pipe(browserSync.stream());
console.log('css compiled');
});

// WATCH TASK
gulp.task('watch', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(sassIn, ['sass']);
  gulp.watch(['./*.html']).on('change', browserSync.reload);
});

// IMAGE MIN
gulp.task('imageMin', function() {
  gulp.src('assets/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
})

// default    
gulp.task('default', ['watch']);