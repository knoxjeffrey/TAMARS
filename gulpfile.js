var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var serve = require('gulp-serve');
var minifyCss = require('gulp-minify-css');
var babelify = require('babelify');

var express = require('express');
var path = require('path')
var app = express();

/*
require('node-jsx').install()
var React = require('react');
var ReactRouter = require('react-router');
var createLocation = require('react-router/node_modules/history/lib/createLocation');
var RoutingContext = ReactRouter.RoutingContext;
var match = ReactRouter.match;
var routes = require('./src/routes');
var renderToString = require('react-dom/server');
*/
var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [babelify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./js'))
    .pipe(sync.reload({
      stream: true,
      once: true
    }));
}

function production_bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(sync.reload({
      stream: true,
      once: true
    }));
}

bundler.on('update', function() {
  bundle();
  gutil.log('Rebundle...');
});

gulp.task('build', function() {
  return bundle();
});

gulp.task('production_build', function() {
  return production_bundle();
});

gulp.task('serve', ['build'], function() {
  sync({
    server: {
      baseDir: './',
      middleware: [ historyApiFallback() ]
    },
    files: ["*.html"]
  });

  gulp.watch('./sass/**/*.scss', ['sass', sync.reload]);
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['serve', 'sass']);

gulp.task('serve-prod', ['minify-css', 'production_build'], function() {
  // serve static assets normally
  app.use(express.static(__dirname + '/'));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).
  app.get('*', function(request, response){
    response.sendFile(path.resolve(__dirname, '', 'index.html'))
  });

  app.listen(process.env.PORT || 5000);
});
