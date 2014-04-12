define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var PropertyType = {
        TEXT: 0,
        NUMBER: 1,
        DATETIME: 2
    };

    var BoreholePointPresetModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
            name: '',
            propertyName: '',
            propertyType: PropertyType.TEXT,
            symbol: ''
        },

        urlRoot: AppConfig.rest.boreholePointPresets
    });

    var BoreholePointPresetCollection = Backbone.Collection.extend({
        model: BoreholePointPresetModel,

        url: function () {
            return AppConfig.rest.boreholePointPresets;
        }
    });

    return {
        Model: BoreholePointPresetModel,
        Collection: BoreholePointPresetCollection,
        PropertyType: PropertyType
    };
});