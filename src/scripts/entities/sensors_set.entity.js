define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        Field = require('./field.entity');

    var SensorsSetModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
            name: '',

            fields: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'fields',
                relatedModel: Field.Model,
                collectionType: Field.Collection
            }
        ],

        urlRoot: AppConfig.rest.sensorssets
    });

    var SensorsSetCollection = Backbone.Collection.extend({
        model: SensorsSetModel,
        url: function () {
            return this.parents[0].url() + AppConfig.rest.sensorssets;
        }
    });

    return {
        Model: SensorsSetModel,
        Collection: SensorsSetCollection
    };
});
