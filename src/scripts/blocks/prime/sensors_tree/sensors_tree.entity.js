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
            this._state = {};

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
            var cid = sensorModel.cid,
                borehole = sensorModel.collection.parents[0];

            if (typeof this._selectedSensors[cid] === 'undefined') {
                this._selectedSensors[cid] = {
                    borehole: borehole,
                    type: sensorModel.collection._selfKey,
                    sensor: sensorModel
                };

                this._state[path] = true;
            } else {
                delete this._selectedSensors[cid];
                delete this._state[path];
            }

            this._triggerSensorsStateChange();
        },

        // Возможно некорректное восстановление
        // после удаления/добавления датчиков
        restoreState: function () {
            this._selectedSensors = {};

            _.each(this._state, function (val, key) {
                this.set(key + '.isChecked', true);
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
