define(function (require) {
	'use strict';

	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Template = require('text!./cluster.template.html');

	var ClusterView = Marionette.ItemView.extend({
		template: _.template(Template),
		
		className: 'admin_cluster',

		onRender: function () {
			this.binding = Rivets.bind(this.el, {
				cluster: this.model
			});
		},

		serializeData: function () {
			return {
				cluster: this.model
			};
		}
	});

	return ClusterView;
});