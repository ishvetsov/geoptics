define(function (require) {
	'use strict';

	var Block = require('core/block.ui'),
		Cluster = require('entities/cluster.entity'),
		AppConfig = require('configs/app.config'),

		View = require('./cluster.view');

	var FieldBlock = Block.create({
		view: View,
		model: Cluster.Model,

		fetch: function (id) {
			return this._modelInstance.fetch({
				data: {id: id}
			});
		},

		resetModel: function () {
			this._modelInstance.clear().set('boreholes', []);
			return this;
		}
	});

	return FieldBlock;
});
