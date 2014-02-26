define(function (require) {
    'use strict';

    var Field = require('entities/field.entity'),
        AppConfig = require('configs/app.config');

    var SetModel = Backbone.AssociatedModel.extend();

    var SensorsTreeModel = Backbone.AssociatedModel.extend({
        urlRoot: AppConfig.rest.primeSensorsTree,

        relations: [
            {
                type: Backbone.Many,
                key: 'sets',
                relatedModel: SetModel
            },
            {
                type: Backbone.Many,
                key: 'fields',
                relatedModel: Field.Model
            }
        ],

        initialize: function () {
            this._selectedSensors = {};

            this.on('nested-change', this._onSensorChanged);
        }
    });

    _.extend(SensorsTreeModel.prototype, {
        getSelectedSensorsIds: function () {
            return _.keys(this._selectedSensors);
        },

        resetSensors: function () {
            var _this = this;

            _.values(_this._selectedSensors).forEach(function (keypath) {
                _this.set(keypath + '.isChecked', false);
            });

            return _this;
        },

        loadSet: function () {
            return this.resetSensors().fetch({
                url: AppConfig.rest.sensorsSets,
                remove: false
            });
        },

        _onSensorChanged: function (path, sensorModel) {
            var id = sensorModel.get('id');

            console.log(window.a = sensorModel)

            if (typeof this._selectedSensors[id] === 'undefined') {
                this._selectedSensors[id] = path;
            } else {
                delete this._selectedSensors[id];
            }

            this._triggerSensorsStateChange();
        },

        _triggerSensorsStateChange: _.debounce(function () {
            this.trigger('state:change', this.getSelectedSensorsIds());
        }, 100)
    });

    return {
        Model: SensorsTreeModel
    };
});
