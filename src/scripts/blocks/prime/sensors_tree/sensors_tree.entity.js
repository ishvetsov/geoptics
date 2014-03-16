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
        },

        fetchChildren: function () {
            var sets = this.get('sets');

            return $.when(
                this.get('fields').fetch(),
                sets ? sets.fetch() : null);
        },
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

        loadSet: function (set) {
            var _this = this;

            set.get('fields')
            .fetch()
            .then(function (data) {
                _this.resetSensors()
                    .get('fields').set(data, {remove: false});
            });
        },

        _onSensorChanged: function (path, sensorModel) {
            var cid = sensorModel.cid;

            if (typeof this._selectedSensors[cid] === 'undefined') {
                this._selectedSensors[cid] = {
                    borehole: sensorModel.collection.parents[0],
                    type: sensorModel.collection._selfKey,
                    sensor: sensorModel
                };
            } else {
                delete this._selectedSensors[cid];
            }

            this._triggerSensorsStateChange();
        },

        _triggerSensorsStateChange: _.debounce(function () {
            this.trigger('state:change', this.getSelectedSensors());
        }, 100)
    });

    return {
        Model: SensorsTreeModel
    };
});
