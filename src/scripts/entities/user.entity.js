define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        UserGroup = require('./user_group.entity');

    var UserModel = Backbone.AssociatedModel.extend({
        defaults: {
            firstName: '',
            middleName: '',
            lastName: '',
            groups: [],

            shortName: function () {
                return this.getShortName();
            }
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'groups',
                relatedModel: UserGroup.Model
            }
        ],

        getShortName: function () {
            return this.get('lastName') +
                ' ' + this.get('firstName')[0] + '.';
        }
    });

    var UserCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return {
        Model: UserModel,
        Collection: UserCollection
    };
});
