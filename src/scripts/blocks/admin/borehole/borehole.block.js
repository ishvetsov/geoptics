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

            this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (id) {
            this._modelInstance.set('id', id);

            return $.when(
                this._modelInstance.fetch(),
                this._modelInstance.get('psensors').fetch(),
                this._modelInstance.get('tsensors').fetch(),
                this._modelInstance.get('perforations').fetch(),
                this._modelInstance.get('depths').fetch(),
                this._modelInstance.get('moments').fetch()
            );
        }
    });

    return BoreholeBlock;
});
