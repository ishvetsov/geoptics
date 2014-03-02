define(function (require) {
	'use strict';

	var Field = require('entities/field.entity'),
		Cluster = require('entities/cluster.entity'),
		Borehole = require('entities/borehole.entity');

	var NoAttachedModel = Backbone.AssociatedModel.extend({
		defaults: {
			fields: [],
			clusters: [],
			boreholes: [],
			curField: null,
			curCluster: null
		},

		relations: [
			{
				type: Backbone.Many,
				key: 'fields',
				relatedModel: Field.Model,
				collectionType: Field.Collection
			},
			{
				type: Backbone.Many,
				key: 'clusters',
				relatedModel: Cluster.Model,
				collectionType: Cluster.Collection
			},
			{
				type: Backbone.Many,
				key: 'boreholes',
				relatedModel: Borehole.Model,
				collectionType: Borehole.Collection
			}
		],

		initialize: function () {
			var _this = this;

			_this.set('curField', new Field.Model());
			_this.set('curCluster', new Cluster.Model());

			_this._firstSync = true;

			_this.get('fields').on('sync', function () {
				if (_this._firstSync) {
					console.log(_this.get('curField'));
					// this.get('curField').reset();
					_this._firstSync = false;
				}
			});
		}
	});

	return {
		Model: NoAttachedModel
	};
});
