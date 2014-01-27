define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Borehole = require('./borehole.entity'),
        Comment = require('./comment.entity');

    var ClusterModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: '',
            number: '',

            comments: [],
            boreholes: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                relatedModel: Comment.Model
            },
            {
                type: Backbone.Many,
                key: 'boreholes',
                relatedModel: Borehole.Model
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
