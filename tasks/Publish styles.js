let gulp = require ( 'gulp' );
let sass = require ( 'gulp-sass' );
let polymerize = require ( 'gulp-polymerize-css' );
let rename = require ( 'gulp-rename' )

gulp.task ( 'Publish styles', [ 'Transpile scss' ], ( ) =>
{
  	return gulp.src ( 'temp/exercise-form.css' ).
    	pipe ( polymerize ( { styleId:'exercise-form-styles' } ) ).
    	pipe ( rename ( 'exercise-form-styles.html' ) ).
    	pipe ( gulp.dest ( 'dist' ) );
} );

gulp.task ( 'Transpile scss', ( ) =>
{
	return gulp.src ( './element/exercise-form.scss' ).
	pipe ( sass ( ) ).
	pipe ( gulp.dest ( './temp' ) );
} );