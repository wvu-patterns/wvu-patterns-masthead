'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    merge = require('merge'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars'),
    todo = require('gulp-todo'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    gutil = require('gulp-util'),
    file = require('gulp-file'),
    combinatorics = require('js-combinatorics'),
    _ = require('underscore-node');



gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './build',
    },
    open: false,
    logConnections: true,
    logSnippet: false
  });
});


gulp.task('todo', function(){
  return gulp.src([
    './**/*.scss',
    '!./bower_components/**/*.scss',
    './**/*.html',
    '!./bower_components/**/*.html',
    './**/*.hbs',
    '!./bower_components/**/*.hbs',
    './**/*.haml',
    '!./bower_components/**/*.haml'
  ])
  .pipe(todo())
  .pipe(gulp.dest('./'));
});

gulp.task('compile-scss', ['scss-lint'], function(){
  return gulp.src([
      './test/scss/**/*.scss',
      './build/scss/**/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7', { cascade: true }))
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: './build/css/'
    }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('build-scss-templates', ['build-json'], function (cb) {
  var options = {
    batch : [
      './bower_components/wvu-patterns-search/src/handlebars',
      './src/handlebars'
    ]
  }

  var test_data = JSON.parse(fs.readFileSync('./build/data/tests.json'));

  test_data['tests'].forEach(function(test){
    gulp.src(['./test/scss/pattern.scss.hbs'])
      .pipe(handlebars(test, options))
      .pipe(rename({
        basename: test['test-name'],
        extname: '.scss'
      }))
      .pipe(gulp.dest('./build/scss'));
  });
  return cb();
})

gulp.task('build-iframe-templates', ['build-scss-templates'], function (cb) {
  var options = {
    batch : [
      './bower_components/wvu-patterns-search/src/handlebars',
      './src/handlebars'
    ]
  }

  var test_data = JSON.parse(fs.readFileSync('./build/data/tests.json'));

  test_data['tests'].forEach(function(test){

    gulp.src(['./test/partials/_iframe-template.hbs'])
      .pipe(handlebars(test, options))
      .pipe(rename({
        basename: test['test-name'],
        extname: '.html'
      }))
      .pipe(gulp.dest('./build'));
  });
  return cb();
})

gulp.task('build-json', function () {
  var test_data = JSON.parse(fs.readFileSync('./test/data/test.json'));

  var test_items = [];
  test_data['tests'].forEach(function(test){

    test_data['styles'].forEach(function(style){
      var test_object = {
        'test-name': style+'-'+test.name,
        color: style,
        name: test.name,
        settings: test['settings']
      }
      test_items.push(test_object);
    });
  });

  var test_object = {
    tests: test_items
  }

  return file('tests.json', JSON.stringify(test_object, null, 2), { src: true }).pipe(gulp.dest('./build/data'));
});

gulp.task('build', ['todo','compile-scss','build-iframe-templates'], function () {
  var options = {
    batch : [
      './bower_components/wvu-patterns-search/src/handlebars',
      './src/handlebars'
    ]
  }

  var test_data = JSON.parse(fs.readFileSync('./build/data/tests.json'));

  var wvu_search_data = JSON.parse(fs.readFileSync('./bower_components/wvu-patterns-search/data/_wvu-search.json'));
  var wvu_masthead_data = JSON.parse(fs.readFileSync('./data/_wvu-masthead.json'));

  var templateData = merge(wvu_search_data, test_data);

  // Build dynamic iframe pages
  templateData['tests'].forEach(function(test){

  });

  return gulp.src(['./test/**/*.hbs', '!./test/**/_*.hbs'])
        .pipe(handlebars(templateData, options))
        .pipe(rename({
          extname: '.html'
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('scss-lint', function(){
  return gulp.src('./src/scss/*.scss')
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

gulp.task('ci',['build']);

gulp.task('default',['build','browser-sync'], function(){
  gulp.watch(['./src/scss/*.scss','./test/scss/*.scss'],['build']);
  gulp.watch(['./src/handlebars/*.hbs','./test/**/*.hbs','./data/_wvu-masthead.json'],['build']);
  gulp.watch('./build/**/*.html').on('change',reload);
  gulp.watch('./build/css/*.css').on('change',reload);
  gulp.watch(['./src/haml/**/*.haml','./src/cleanslate/**/*.html'], ['todo']);
});
