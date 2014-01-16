define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        UserGroup = require('./user_group.entity');

    var UserModel = Backbone.AssociatedModel.extend({
        defaults: {
            groups: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'groups',
                relatedModel: UserGroup.Model
            }
        ]
    });

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return {
        Model: UserModel,
        Collection: UsersCollection
    };
});
