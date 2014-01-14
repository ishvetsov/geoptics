define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Config = require('configs/config'),

        Comment = require('./comment');

    var PressureSensorModel = Backbone.AssociatedModel.extend({
        defaults: {
            name: '',
            comments: [],
            channelNumber: '',
            depthPlacement: ''
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