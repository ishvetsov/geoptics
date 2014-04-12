define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        BoreholePointPreset = require('entities/borehole_point_preset.entity'),
        AppConfig = require('configs/app.config'),
        BoreholePointPresetBlock = require('blocks/admin/borehole_point_preset/borehole_point_preset.block'),

        View = require('./borehole_point_presets.view');

    var boreholePointPresetBlock = BoreholePointPresetBlock.getInstance();

    var BoreholePointPresetsBlock = Block.create({
        view: View,
        collection: BoreholePointPreset.Collection,

        onInit: function () {
            var _this = this;
            _this._view.on('edit', function (preset) {
                boreholePointPresetBlock.init({model: preset, mode: 'edit'});
                boreholePointPresetBlock.show();
            });

            _this._view.on('create', function () {
                boreholePointPresetBlock.init({mode: 'create'});
                boreholePointPresetBlock.show();
            });

            boreholePointPresetBlock.on('save', function () {
                _this._collection.reset();
                _this.fetch();
            });
        },

        fetch: function () {
            return this._collection.fetch();
        }
    });

    return BoreholePointPresetsBlock;
});
