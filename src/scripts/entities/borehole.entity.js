define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        PressureSensor = require('./pressure_sensor.entity'),
        TemperatureSensor = require('./temperature_sensor.entity'),
        Comment = require('./comment.entity');

    var Borehole = Backbone.Model.extend({
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
            temperatureSensors: [],
            pressureSensors: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'adminComments',
                relatedModel: Comment.Model
            },
            {
                type: Backbone.Many,
                key: 'temperatureSensors',
                relatedModel: TemperatureSensor.Model
            },
            {
                type: Backbone.Many,
                key: 'pressureSensors',
                relatedModel: PressureSensor.Model
            }
        ]
    });

    var BoreholeCollection = Backbone.Collection.extend({
        model: Borehole
    });

    return {
        Model: Borehole,
        Collection: BoreholeCollection
    };
});
