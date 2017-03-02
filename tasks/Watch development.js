let gulp = require ( 'gulp' );
let browser = require ( 'browser-sync' ).create ( );
let settings =
{
	server: 
	{
        baseDir: './'
    }
};

gulp.task ( 'Watch development', [ 'Build element' ], ( ) =>
{
	browser.init ( settings );

	gulp.watch ( './element/*',
	[
		'Build element'
	] ).on ( 'change', browser.reload );
} );