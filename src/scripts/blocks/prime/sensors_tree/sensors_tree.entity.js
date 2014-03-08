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
            return $.when(this.get('fields').fetch(), this.get('sets').fetch());
        },
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
            var id = sensorModel.get('id');

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
