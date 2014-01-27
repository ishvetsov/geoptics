define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

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
                relatedModel: Comment.Model
            },
            {
                type: Backbone.Many,
                key: 'clusters',
                relatedModel: Cluster.Model
            }
        ],

        urlRoot: AppConfig.rest.fields
    });

    var FieldCollection = Backbone.Collection.extend({
        model: FieldModel,
        url: AppConfig.rest.fields
    });

    return {
        Model: FieldModel,
        Collection: FieldCollection
    };
});
