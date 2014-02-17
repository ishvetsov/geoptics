define(function (require) {
	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Template = require('text!./no_attached_boreholes.template.html'),
		EmptyTemplate = require('text!./no_attached_boreholes_empty.template.html');

	var NoAttachedBoreholesView = Marionette.ItemView.extend({
		className: 'admin_no-attached-boreholes',

		getTemplate: function () {
			if (this.collection.length) {
				return _.template(Template);
			}
			return _.template(EmptyTemplate);
		},

		onRender: function () {
			this.binding = Rivets.bind(this.el, {
				boreholes: this.collection,
				view: this
			});
		}
	});

	return NoAttachedBoreholesView;
});
