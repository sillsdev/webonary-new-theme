var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('gulp-exec');
var less = require('gulp-less');

gulp.task('default', function() {
  // place code for your default task here
});

// livereload
var livereload = require('gulp-livereload');

var reloadPatterns = [
	'views/*.twig',
	'*.php',
	'*.css',
	'css/*.css',
	'js/*.js'
];

gulp.task('_reload', function() {
	return gulp.src('../../../../index.php')
		.pipe(livereload());
});

gulp.task('reload', function() {
	livereload.listen();
	gulp.watch(reloadPatterns, ['_reload']);
	gulp.watch('less/*.less', ['less']);
});

gulp.task('less', function() {
	gulp.src('./less/style.less')
	.pipe(less())
	.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
});
