define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        TSensor = require('entities/tsensor.entity'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./tsensor.view');

    var TSensorBlock = Block.create({
        view: View,
        model: TSensor.Model,

        onInit: function (options) {
            var _this = this;

            _this._borehole = new Borehole.Model();

            _this._view.on('view:save', function () {
                _this._model.set('id', _.uniqueId());
                _this._model.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (data) {
            this._borehole.set('id', data.boreholeId);
            this._model.set('channelNumber', data.channelNumber);
            this._borehole.get('tsensors').add(this._model);
            return this._model.fetch();
        }
    });

    return TSensorBlock;
});
