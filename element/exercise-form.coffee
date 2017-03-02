Polymer
	is: 'exercise-form'

	properties:
		action:
			type: String
			value: '/'
		method:
			type: String
			value: 'GET'

	attached: ( ) ->
		this.button = $( 'paper-button' ).first( )
		this.form = $( 'form' ).first( )
		
		this.setupForm( )

	describe: ( event ) ->
		this.form.submit( )

	setupForm: ->
		this.form.on 'iron-form-submit', ( event ) =>
			$( this ).trigger( 'response', event.detail )

		this.form.on 'keyup', ( event ) =>
			disable = ! this.form[ 0 ].validate( )
			this.button.attr 'disabled', disable