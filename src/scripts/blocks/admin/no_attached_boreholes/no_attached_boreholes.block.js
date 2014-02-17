define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./no_attached_boreholes.view');
        
    var NoAttachedBoreholesBlock = Block.create({
        view: View,
        collection: Borehole.Collection,

        fetch: function () {
            return this._collectionInstance.fetch({
                url: AppConfig.rest.adminNoAttachedBoreholes
            });
        }
    });

    return NoAttachedBoreholesBlock;
});
