define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Config = require('configs/config'),

        Well = require('./well.entity'),
        Comment = require('./comment.entity');

    var ClusterModel = Backbone.AssociatedModel.extend({
        defaults: {
            name: '',
            number: '',
            comments: [],
            wells: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                relatedModel: Comment.Model
            },
            {
                type: Backbone.Many,
                key: 'wells',
                relatedModel: Well.Model
            }
        ]
    });

    var ClusterCollection = Backbone.Collection.extend({
        model: ClusterModel
    });

    return {
        Model: ClusterModel,
        Collection: ClusterCollection
    };
});
