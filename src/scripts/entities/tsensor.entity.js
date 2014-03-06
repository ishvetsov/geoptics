define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var TSensorModel = Backbone.AssociatedModel.extend({
        defaults: {
            name: '',
            channelNumber: '',
            depth: '',

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

    var TSensorCollection = Backbone.Collection.extend({
        model: TSensorModel,

        url: function () {
            return this.parents[0].url() +  AppConfig.rest.tsensors;
        }
    });

    return {
        Model: TSensorModel,
        Collection: TSensorCollection
    };
});
