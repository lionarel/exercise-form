(function() {
  Polymer({
    is: 'exercise-form',
    properties: {
      action: {
        type: String,
        value: '/'
      },
      method: {
        type: String,
        value: 'GET'
      }
    },
    attached: function() {
      this.button = $('paper-button').first();
      this.form = $('form').first();
      return this.setupForm();
    },
    describe: function(event) {
      return this.form.submit();
    },
    setupForm: function() {
      this.form.on('iron-form-submit', (function(_this) {
        return function(event) {
          return $(_this).trigger('response', event.detail);
        };
      })(this));
      return this.form.on('keyup', (function(_this) {
        return function(event) {
          var disable;
          disable = !_this.form[0].validate();
          return _this.button.attr('disabled', disable);
        };
      })(this));
    }
  });

}).call(this);
