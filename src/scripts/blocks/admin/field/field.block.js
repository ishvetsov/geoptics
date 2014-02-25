/* global $ */
define(function (require) {
	'use strict';

	var Block = require('core/block.ui'),
		Field = require('entities/field.entity'),
		AppConfig = require('configs/app.config'),

		View = require('./field.view');

	var FieldBlock = Block.create({
		view: View,
		model: Field.Model,

		onInit: function () {
			this._viewInstance.on('view:save', function () {
			});
		},

		fetch: function (id) {
			return this._modelInstance.fetch({
				url: AppConfig.rest.adminField,
				data: {id: id}
			});
		},

		resetModel: function () {
			this._modelInstance.clear().set('clusters', []);
			return this;
		}
	});

	return FieldBlock;
});
