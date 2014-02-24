define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Field = require('entities/field.entity'),

        Borehole = require('./borehole.entity');

    var NoAttachedBoreholesModel = Backbone.AssociatedModel.extend({
        defaults: {
            noAttachedBoreholes: [],
            fields: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'noAttachedBoreholes',
                relatedModel: Borehole.Model,
                collectionType: Borehole.Collection
            },
            {
                type: Backbone.Many,
                key: 'fields',
                relatedModel: Field.Model,
                collectionType: Borehole.Collection
            }
        ]
    });

    return {
        Model: NoAttachedBoreholesModel
    };
});