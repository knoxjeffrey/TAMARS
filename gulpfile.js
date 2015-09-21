var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

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
  transform: [reactify],
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
    //.pipe(buffer())
    //.pipe(uglify())
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

gulp.task('default', ['serve', 'sass']);