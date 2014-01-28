define(function (require) {
	'use strict';

	var Block = require('core/block'),

		View = require('./no_attached_boreholes.view'),
		Collection = require('./no_attached_boreholes.collection');

	var noAttachedBoreholes = new Collection();

	var NoAttachedBoreholesBlock = Block.create({
		view: View,

		viewOptions: {
			collection: noAttachedBoreholes
		},

		fetch: function () {
			return noAttachedBoreholes.fetch();
		}
	});

	return NoAttachedBoreholesBlock;
});