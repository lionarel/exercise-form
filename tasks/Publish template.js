let gulp = require ( 'gulp' );
let pug = require ( 'gulp-pug' );

gulp.task ( 'Publish template', ( ) =>
{
	return gulp.src ( './element/*.pug' ).
	pipe ( pug ( { pretty: true } ) ).
	pipe ( gulp.dest ( './dist' ) );
} );