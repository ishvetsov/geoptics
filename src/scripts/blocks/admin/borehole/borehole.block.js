/* global $ */
define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./borehole.view');

    var BoreholeBlock = Block.create({
        view: View,
        model: Borehole.Model,

        onInit: function () {
            var _this = this;

            this._view.on('view:save', function () {
                _this._model.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (id) {
            this._model.set('id', id);

            return $.when(
                this._model.fetch(),
                this._model.get('psensors').fetch(),
                this._model.get('tsensors').fetch()
            );
        }
    });

    return BoreholeBlock;
});
