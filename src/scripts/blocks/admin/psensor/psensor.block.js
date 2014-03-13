define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        PSensor = require('entities/psensor.entity'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./psensor.view');

    var PSensorBlock = Block.create({
        view: View,
        model: PSensor.Model,

        onInit: function (options) {
            var _this = this;

            _this._borehole = new  Borehole.Model();

            _this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (boreholeId, channelNumber) {
            this._borehole.set('id', boreholeId);
            this._modelInstance.set('channelNumber', channelNumber);
            this._borehole.get('psensors').add(this._modelInstance);

            return this._modelInstance.fetch();
        }
    });

    return PSensorBlock;
});
