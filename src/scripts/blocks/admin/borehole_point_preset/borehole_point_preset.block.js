define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Bus = require('bus'),

        BoreholePointPreset = require('entities/borehole_point_preset.entity'),

        BoreholePointPresetView = require('./borehole_point_preset.view');

    var BoreholePointPresetBlock = Block.create({
        view: BoreholePointPresetView,

        onInit: function (options) {
            var _this = this;
            if (options.mode === 'create') {
                _this._view.model = new BoreholePointPreset.Model();
            }
            else if (options.mode === 'edit') {
                _this._view.model = options.model;
            }
            
            _this._view.setMode(options.mode);

            _this._view.on('save', function () {
                _this.trigger('save');
            });
        },

        show: function () {
            Bus.events.trigger('app:modal:show', this._view);
        }
    });

    return BoreholePointPresetBlock;
});
