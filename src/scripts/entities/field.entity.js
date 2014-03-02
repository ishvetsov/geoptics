define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),
        Utils = require('core/utils'),

        AppConfig = require('configs/app.config'),

        Comment = require('./comment.entity'),
        Cluster = require('./cluster.entity');

    var FieldModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: '',
            number: '',

            comments: [],
            clusters: []
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
                key: 'clusters',
                relatedModel: Cluster.Model,
                collectionType: Cluster.Collection
            }
        ],

        urlRoot: AppConfig.rest.fields,

        fetchClusters: Utils.fetchChild('clusters'),

        initialize: function () {
            _.bindAll(this, 'fetchClusters');
        }

    });

    var FieldCollection = Backbone.Collection.extend({
        model: FieldModel,
        url: function () {
            return AppConfig.rest.fields;
        }
    });

    return {
        Model: FieldModel,
        Collection: FieldCollection
    };
});
