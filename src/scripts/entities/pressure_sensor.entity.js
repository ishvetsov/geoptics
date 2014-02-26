define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

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
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            }
        ],

        urlRoot: AppConfig.rest.psensors
    });

    var PressureSensorCollection = Backbone.Collection.extend({
        model: PressureSensorModel,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.psensors;
        }
    });

    return {
        Model: PressureSensorModel,
        Collection: PressureSensorCollection
    };
});
