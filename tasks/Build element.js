let gulp = require ( 'gulp' );

gulp.task ( 'Build element', 
[
	'Publish template',
	'Publish script',
	'Publish styles'
] );