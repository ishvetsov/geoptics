define(function (require) {
	'use strict';

	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Template = require('text!./field.template.html');

	var FieldView = Marionette.ItemView.extend({
		template: _.template(Template),
		
		className: 'admin_field',

		onRender: function () {
			this.binding = Rivets.bind(this.el, {
				field: this.model
			});
		},

		serializeData: function () {
			return {
				field: this.model
			};
		}
	});

	return FieldView;
});
