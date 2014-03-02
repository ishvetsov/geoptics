define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),

        NoAttached = require('./no_attached.entity'),
        View = require('./no_attached.view');

    var NoAttachedBlock = Block.create({
        view: View,

        model: NoAttached.Model,

        onInit: function () {
            var _this = this;

            _this._viewInstance.on('view:apply', function (saved) {
                // _this._viewInstance.updateBoreholeList();
            });
        },

        fetch: function () {
            var _this = this;

            var boreholes = _this._modelInstance.get('boreholes'),
                fields = _this._modelInstance.get('fields');

            return $.when(
                boreholes.fetch({url: AppConfig.rest.boreholes + '/noattached'}),
                fields.fetch()
                );
            // return $.when(
            //     _this._collectionInstance.fetch({
            //         url: AppConfig.rest.boreholes + '/noattached'
            //     }),
            //     fieldsPromiss);
        }
    });

    return NoAttachedBlock;
});
