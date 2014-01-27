define(function (require) {
	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Template = require('text!./no_attached_boreholes.template.html'),
		EmptyTemplate = require('text!./no_attached_boreholes_empty.template.html');

	var NoAttachedBoreholesView = Marionette.ItemView.extend({
		getTemplate: function () {
			if (this.collection.length) {
				return _.template(Template);
			}
			return _.template(EmptyTemplate);
		}
	});

	return NoAttachedBoreholesView;
});
