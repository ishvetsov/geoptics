define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        Bus = require('bus'),

        BoreholePoint = require('entities/borehole_point.entity'),
        BoreholePointPreset = require('entities/borehole_point_preset.entity'),

        View = require('./borehole_point.view');

    var BoreholePointBlock = Block.create({
        view: View,

        onInit: function (options) {
            var _this = this;
            if (options.mode === 'create') {
                _this._view.model = new BoreholePoint.Model();
            }
            else if (options.mode === 'edit') {
                _this._view.model = new BoreholePoint.Model(options.model.toJSON());
            }
            _this._view.presets = new BoreholePointPreset.Collection();
            _this._view.presets.fetch().then(function () {
                _this.trigger('ready');
            });

            _this._view.setMode(options.mode);

            _this._view.on('save', function () {
                _this.trigger('save', _this._view.model);
            });
        },

        show: function () {
            Bus.events.trigger('app:modal:show', this._view);
        }
    });

    return BoreholePointBlock;
});
