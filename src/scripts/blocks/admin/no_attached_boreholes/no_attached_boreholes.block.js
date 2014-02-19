define(function (require) {
    'use strict';

    var $ = require('jquery'),

        Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),

        NoAttachedBoreholes = require('./no_attached_boreholes.entity'),
        View = require('./no_attached_boreholes.view');

    var NoAttachedBoreholesBlock = Block.create({
        view: View,
        model: NoAttachedBoreholes.Model,

        onInit: function () {
            var _this = this;
            console.log('init');
            _this._viewInstance.on('view:saveBoreholes', function (saveResult) {
                $.post(AppConfig.rest.saveNoAttachedBoreholes, {
                    clusterId: saveResult.cluster.get('id'),
                    boreholesIds: saveResult.boreholesIds
                }, function () {
                    _this._viewInstance.removeCheckedBoreholes();
                });
            });
        },

        fetch: function () {
            this._modelInstance.get('noAttachedBoreholes').reset();
            return this._modelInstance.get('noAttachedBoreholes').fetch({
                url: AppConfig.rest.adminNoAttachedBoreholes
            });
        },

        setFields: function (fields) {
            this._modelInstance.set('fields', fields);
        }
    });

    return NoAttachedBoreholesBlock;
});
