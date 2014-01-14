define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Config = require('configs/config'),

        Comment = require('./comment'),
        Cluster = require('./cluster');

    var DepositModel = Backbone.AssociatedModel.extend({
        defaults: {
            name: '',
            number: '',
            comments: [],
            clusters: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                relatedModel: Comment.Model
            },
            {
                type: Backbone.Many,
                key: 'clusters',
                relatedModel: Cluster.Model
            }
        ]
    });

    var DepositCollection = Backbone.Collection.extend({
        model: DepositModel
    });

    return {
        Model: DepositModel,
        Collection: DepositCollection
    };
});
