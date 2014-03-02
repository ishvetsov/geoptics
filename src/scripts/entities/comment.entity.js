define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),
        moment = require('moment'),

        User = require('./user.entity');

    var CommentModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            createDate: '',
            text: ''
        },

        relations: [
            {
                type: Backbone.One,
                key: 'author',
                relatedModel: User.Model
            }
        ]
    });

    var CommentCollection = Backbone.Collection.extend({
        model: CommentModel
    });

    return {
        Model: CommentModel,
        Collection: CommentCollection
    };
});
