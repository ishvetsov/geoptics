define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),
        Borehole = require('entities/borehole.entity'),

        View = require('./no_attached.view');

    var NoAttachedBlock = Block.create({
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
            return this._collectionInstance.fetch();
        },

        setFields: function (fields) {
            this._viewInstance.setFields(fields);
        }
    });

    return NoAttachedBlock;
});
