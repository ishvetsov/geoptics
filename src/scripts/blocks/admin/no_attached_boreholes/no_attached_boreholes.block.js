define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        View = require('./no_attached_boreholes.view'),
        Collection = require('./no_attached_boreholes.collection');

    var noAttachedBoreholes = new Collection();

    var NoAttachedBoreholesBlock = Block.create({
        view: View,
        collection: Collection,

        fetch: function () {
            return noAttachedBoreholes.fetch();
        }
    });

    return NoAttachedBoreholesBlock;
});
