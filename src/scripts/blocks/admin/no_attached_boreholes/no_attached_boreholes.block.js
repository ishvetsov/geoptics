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
        },

        fetch: function () {
            var _this = this;

            _this._createInstances();

            _this._viewInstance.on('view:save', function (saveResult) {
                // TODO: Dummy
                $.post(AppConfig.rest.saveNoAttachedBoreholes, {
                    clusterId: saveResult.cluster.get('id'),
                    boreholesIds: saveResult.boreholesIds
                }, function () {
                    _this._viewInstance.removeCheckedBoreholes();
                });
            });

            return _this._collectionInstance.fetch({
                url: AppConfig.rest.adminNoAttachedBoreholes
            });
        },

        setFields: function (fields) {
            this._viewInstance.setFields(fields);
        }
    });

    return NoAttachedBoreholesBlock;
});
