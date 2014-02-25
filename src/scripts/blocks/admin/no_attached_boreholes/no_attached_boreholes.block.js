define(function (require) {
    'use strict';
    var $ = require('jquery'),

        Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),
        Borehole = require('./borehole.entity'),

        View = require('./no_attached_boreholes.view');

    var NoAttachedBoreholesBlock = Block.create({
        view: View,

        collection: Borehole.Collection,

        onInit: function () {
            var _this = this;

            // _this._viewInstance.on('view:apply', function (saved) {
            //     $.post(
            //         AppConfig.rest.saveNoAttachedBoreholes,
            //         {
            //             clusterId: saved.cluster.get('id'),
            //             boreholesIds: saved.boreholesIds
            //         },
            //         function () {
            //             _this._viewInstance.updateBoreholeList();
            //         }
            //     );
            // });
        },

        fetch: function () {
            return this._collectionInstance.fetch({
                url: AppConfig.rest.adminNoAttachedBoreholes
            });
        },

        setFields: function (fields) {
            this._viewInstance.setFields(fields);
        }
    });

    return NoAttachedBoreholesBlock;
});
