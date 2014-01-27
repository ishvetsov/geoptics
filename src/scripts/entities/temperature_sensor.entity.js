define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

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
                relatedModel: Comment.Model
            }
        ]
    });

    var TemperatureSensorCollection = Backbone.Collection.extend({
        model: TemperatureSensorModel
    });

    return {
        Model: TemperatureSensorModel,
        Collection: TemperatureSensorCollection
    };
});
