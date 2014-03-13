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

        url: function () {
            if (this.collection) {
                return this.collection.parents[0].url() +
                    '/tsensors/' + this.get('channelNumber');
            }
        }
    });

    var TSensorCollection = Backbone.Collection.extend({
        model: TSensorModel,

        url: function () {
            return this.parents[0].url() +  '/tsensors';
        }
    });

    return {
        Model: TSensorModel,
        Collection: TSensorCollection
    };
});
