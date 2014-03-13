define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var PSensorModel = Backbone.AssociatedModel.extend({
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
                    '/psensors/' + this.get('channelNumber');
            }
        },

        initialize: function () {
            this.set('id', _.uniqueId());
        }
    });

    var PSensorCollection = Backbone.Collection.extend({
        model: PSensorModel,

        url: function () {
            return this.parents[0].url() + '/psensors';
        }
    });

    return {
        Model: PSensorModel,
        Collection: PSensorCollection
    };
});
