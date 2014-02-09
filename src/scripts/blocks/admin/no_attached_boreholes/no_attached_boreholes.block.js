define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        View = require('./no_attached_boreholes.view'),
        NoAttachedBoreholesCollection = require('./no_attached_boreholes.collection');

    var NoAttachedBoreholesBlock = Block.create({
        view: View,
        collection: NoAttachedBoreholesCollection,

        fetch: function () {
            return this._collectionInstance.fetch();
        }
    });

    return NoAttachedBoreholesBlock;
});
