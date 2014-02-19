define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),

        NoAttachedBoreholes = require('./no_attached_boreholes.entity'),
        View = require('./no_attached_boreholes.view');

    var NoAttachedBoreholesBlock = Block.create({
        view: View,
        model: NoAttachedBoreholes.Model,

        onInit: function () {
            this._viewInstance.on('view:saveBoreholes', function (saveResult) {
                console.log('saveResult', saveResult);
            });
        },

        fetch: function () {
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
