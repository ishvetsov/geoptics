define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var MomentModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            date: null
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

    var MomentCollection = Backbone.Collection.extend({
        model: MomentModel
    });

    return {
        Model: MomentModel,
        Collection: MomentCollection
    };
});