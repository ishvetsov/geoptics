define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),
        Borehole = require('entities/borehole.entity'),
        Field = require('entities/field.entity'),

        View = require('./no_attached.view');

    var NoAttachedBlock = Block.create({
        view: View,

        collection: Borehole.Collection,

        onInit: function () {
            var _this = this;

            _this._fields = new Field.Collection();
            _this._viewInstance.setFields(_this._fields);

            _this._viewInstance.on('view:apply', function (saved) {
                // _this._viewInstance.updateBoreholeList();
            });
        },

        fetch: function () {
            var _this = this,
                fieldsPromiss = _this._fields.fetch();

            return $.when(
                _this._collectionInstance.fetch({
                    url: AppConfig.rest.boreholes + '/noattached'
                }),
                fieldsPromiss);
        }
    });

    return NoAttachedBlock;
});
