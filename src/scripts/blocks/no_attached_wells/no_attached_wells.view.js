define(function (require) {
	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		NoAttachedWellsTemplate = require('text!./no_attached_wells.template.html'),
		NoAttachedWellsEmptyTemplate = require('text!./no_attached_wells_empty.template.html');

	var NoAttachedWellsView = Marionette.ItemView.extend({
		getTemplate: function () {
			if (this.collection.length) {
				return _.template(NoAttachedWellsTemplate);
			}
			return _.template(NoAttachedWellsEmptyTemplate);
		},

		onRender: function () {
			console.log('render NoAttachedWellsView');
		}
	});

	return NoAttachedWellsView;
});