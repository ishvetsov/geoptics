define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        PressureSensor = require('./pressure_sensor.entity'),
        TemperatureSensor = require('./temperature_sensor.entity'),
        Comment = require('./comment.entity');

    var Borehole = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: '',
            location: '',
            number: '',
            fishing: '',
            companyOwner: '',
            serviceCompany: '',
            paramsDescription: '',
            installedEquipmentDescription: '',
            seaLevelRelativePosition: '',
            craterDepth: '',
            bottomDepth: '',
            perforations: [],
            interestingDepths: [],
            interestingTimes: [],
            
            adminComments: [],
            tsensors: [],
            psensors: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'adminComments',
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            },
            {
                type: Backbone.Many,
                key: 'tsensors',
                relatedModel: TemperatureSensor.Model,
                collectionType: TemperatureSensor.Collection
            },
            {
                type: Backbone.Many,
                key: 'psensors',
                relatedModel: PressureSensor.Model,
                collectionType: PressureSensor.Collection
            }
        ],

        urlRoot: AppConfig.rest.boreholes
    });

    var BoreholeCollection = Backbone.Collection.extend({
        model: Borehole,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.boreholes;
        }
    });

    return {
        Model: Borehole,
        Collection: BoreholeCollection
    };
});
