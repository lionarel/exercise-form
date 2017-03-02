let gulp = require ( 'gulp' );
let coffee = require ( 'gulp-coffee' );

gulp.task ( 'Publish script', ( ) =>
{
	gulp.src ( './element/*.coffee' ).
	pipe ( coffee ( ) ).
	pipe ( gulp.dest ( './dist' ) );
} );