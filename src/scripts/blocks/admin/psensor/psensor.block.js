define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        PSensor = require('entities/psensor.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./psensor.view');

    var PSensorBlock = Block.create({
        view: View,
        model: PSensor.Model,

        onInit: function (options) {
            var _this = this;

            _this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (boreholeId, channelNumber) {

            return this._modelInstance.fetch();
        }
    });

    return PSensorBlock;
});
