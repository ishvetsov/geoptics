define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Comment = require('./comment.entity');

    var PressureSensorModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: '',
            channelNumber: '',
            depthPlacement: '',

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

    var PressureSensorCollection = Backbone.Collection.extend({
        model: PressureSensorModel
    });

    return {
        Model: PressureSensorModel,
        Collection: PressureSensorCollection
    };
});
