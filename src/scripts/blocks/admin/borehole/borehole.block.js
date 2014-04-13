/* global $ */
define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),
        BoreholePointBlock = require('blocks/admin/borehole_point/borehole_point.block'),

        View = require('./borehole.view');

    var boreholePointBlock = BoreholePointBlock.getInstance();

    var BoreholeBlock = Block.create({
        view: View,
        model: Borehole.Model,

        onInit: function () {
            _.bindAll(this, '_fetchPoints');
            var _this = this;

            this._view.on('view:save', function () {
                _this._model.save().then(function () {
                    history.back();
                });
            });

            boreholePointBlock.on('ready', boreholePointBlock.show);
            _this._view.on('editPoint', function (point) {
                boreholePointBlock.init({model: point, mode: 'edit'});
            });

            _this._view.on('createPoint', function () {
                boreholePointBlock.init({mode: 'create'});
            });

            boreholePointBlock.on('save', function (point) {
                var points = _this._model.get('points');
                point.collection = points;
                if (point.isNew()) {
                    point.saveAtContext().then(function () {
                        points.set(point, {remove: false});
                    });
                } else {
                    point.save().then(function () {
                        points.set(point, {remove: false});
                    });
                }
            });
        },

        fetch: function (id) {
            this._model.set('id', id);
            
            return $.when(
                this._model.fetch(),
                this._model.get('psensors').fetch(),
                this._model.get('tsensors').fetch(),
                this._fetchPoints()
            );
        },

        _fetchPoints: function () {
            var _this = this,
                defPoints = _this._model.get('points').fetch();

            defPoints.then(function () {
                _this._model.get('points').each(function (p) {
                    p.fetchPreset();
                });
            });
            return defPoints;
        }
    });

    return BoreholeBlock;
});
