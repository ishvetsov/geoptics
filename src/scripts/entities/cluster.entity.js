define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

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
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            },
            {
                type: Backbone.Many,
                key: 'boreholes',
                relatedModel: Borehole.Model,
                collectionType: Borehole.Collection
            }
        ],

        urlRoot: AppConfig.rest.clusters
    });

    var ClusterCollection = Backbone.Collection.extend({
        model: ClusterModel,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.clusters;
        }
    });

    return {
        Model: ClusterModel,
        Collection: ClusterCollection
    };
});
