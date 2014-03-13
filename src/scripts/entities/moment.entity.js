define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity');

    var MomentModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
            date: null
        },

        relations: [
            {
                type: Backbone.One,
                key: 'comment',
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            }
        ],

        urlRoot: AppConfig.rest.moments
    });

    var MomentCollection = Backbone.Collection.extend({
        model: MomentModel,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.moments;
        }
    });

    return {
        Model: MomentModel,
        Collection: MomentCollection
    };
});