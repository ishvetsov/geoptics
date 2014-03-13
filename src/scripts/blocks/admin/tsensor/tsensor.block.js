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

            _this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (boreholeId, channelNumber) {
            this._borehole.set('id', boreholeId);
            this._borehole.get('tsensors').add(this._modelInstance);
            return this._modelInstance.fetch();
        }
    });

    return TSensorBlock;
});
