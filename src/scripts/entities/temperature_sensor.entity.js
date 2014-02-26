define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var TemperatureSensorModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: '',
            channelNumber: '',
            cableDepth: '',
            comments: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            }
        ],

        urlRoot: AppConfig.rest.tsensors
    });

    var TemperatureSensorCollection = Backbone.Collection.extend({
        model: TemperatureSensorModel,

        url: function () {
            return this.parents[0].url() +  AppConfig.rest.tsensors;
        }
    });

    return {
        Model: TemperatureSensorModel,
        Collection: TemperatureSensorCollection
    };
});
