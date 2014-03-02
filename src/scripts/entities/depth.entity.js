define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var DepthModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            value: 0
        },

        relations: [
            {
                type: Backbone.One,
                key: 'comment',
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            }
        ]
    });

    var DepthCollection = Backbone.Collection.extend({
        model: DepthModel
    });

    return {
        Model: DepthModel,
        Collection: DepthCollection
    };
});
