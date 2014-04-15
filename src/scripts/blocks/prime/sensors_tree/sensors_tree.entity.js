define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),
        AppConfig = require('configs/app.config'),

        Field = require('entities/field.entity'),
        SensorsSet = require('entities/sensors_set.entity');

    var SensorsTreeModel = Backbone.AssociatedModel.extend({
        defaults: {
            fields: [],
            sets: null
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'fields',
                relatedModel: Field.Model,
                collectionType: Field.Collection
            }
        ],

        initialize: function () {
            this._selectedSensors = {};

            // Удаление привязки к родительской модели
            this.get('fields').parents.length = 0;

            this.on('nested-change', this._onSensorChanged);

            this.on(
                'sync:fields.clusters.boreholes.psensors',
                this.restoreState);
        },

        fetchChildren: function () {
            var sets = this.get('sets');

            return $.when(
                this.get('fields').fetch(),
                sets ? sets.fetch() : null);
        }
    });

    _.extend(SensorsTreeModel.prototype, {
        getSelectedSensors: function () {
            return _.values(this._selectedSensors);
        },

        resetSensors: function () {
            var _this = this;

            _.values(_this._selectedSensors).forEach(function (data) {
                data.sensor.set('isChecked', false);
            });

            return _this;
        },

        _onSensorChanged: function (path, sensorModel) {
            var key = path,
                borehole = sensorModel.collection.parents[0];

            var restoreState = sensorModel.get('restoreState');

            if (typeof this._selectedSensors[key] === 'undefined' || restoreState) {

                this._selectedSensors[key] = {
                    borehole: borehole,
                    type: sensorModel.collection._selfKey,
                    sensor: sensorModel
                };

                sensorModel.set('restoreState', false, {silent: true});
            } else {
                delete this._selectedSensors[key];
            }

            this._triggerSensorsStateChange();
        },

        // Возможно некорректное восстановление
        // после удаления/добавления датчиков
        restoreState: function () {
            _.each(this._selectedSensors, function (val, key) {
                var sensor = this.get(key);
                sensor && sensor.set({
                    isChecked: true,
                    restoreState: true
                });
            }, this);
        },

        _triggerSensorsStateChange: _.debounce(function () {
            this.trigger('state:change', this.getSelectedSensors());
        }, 100)
    });

    return {
        Model: SensorsTreeModel
    };
});
