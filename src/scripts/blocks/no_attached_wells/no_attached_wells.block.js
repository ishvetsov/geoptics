define(function (require) {
	'use strict';

	var Block = require('core/block'),

		NoAttachedWellsView = require('./no_attached_wells.view'),
		NoAttachedWellsCollection = require('./no_attached_wells.collection');

	var noAttachedWellsCollection = new NoAttachedWellsCollection();

	var NoAttachedWellsBlock = Block.create({
		view: NoAttachedWellsView,

		viewOptions: {
			collection: noAttachedWellsCollection
		},

		fetch: function () {
			return noAttachedWellsCollection.fetch();
		}
	});

	return NoAttachedWellsBlock;
});