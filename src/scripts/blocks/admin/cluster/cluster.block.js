define(function (require) {
	'use strict';

	var Block = require('core/block.ui'),
		Cluster = require('entities/cluster.entity'),
		AppConfig = require('configs/app.config'),

		View = require('./cluster.view');

	var FieldBlock = Block.create({
		view: View,
		model: Cluster.Model,

		onBeforeInit: function (options) {
			this.viewOptions = {mode: options.mode};
		},

		onInit: function () {
			var _this = this;

			_this._viewInstance.on('view:save', function () {
				_this._modelInstance.save().then(function () {
					history.back();
				});
			});
		},

		fetch: function (id) {
			this._modelInstance.set('id', id);

			return $.when(
				this._modelInstance.fetch(),
				this._modelInstance.get('boreholes').fetch()
			);
		}
	});

	return FieldBlock;
});
