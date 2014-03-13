define(function (require) {
	'use strict';

	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Template = require('text!./cluster.template.html');

	var ClusterView = Marionette.ItemView.extend({
		template: _.template(Template),
		
		className: 'admin_cluster',

		initialize: function (options) {
			this._mode = options.mode;
			_.bindAll(this, 'save');
		},

		onRender: function () {
			this.binding = Rivets.bind(this.el, {
				cluster: this.model,
				view: this
			});
		},

		serializeData: function () {
			return {
				cluster: this.model,
				mode: this._mode
			};
		},

		save: function () {
			this.trigger('view:save');
		}
	});

	return ClusterView;
});
