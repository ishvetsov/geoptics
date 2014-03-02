define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        UserGroup = require('./user_group.entity');

    var UserModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            firstName: '',
            middleName: '',
            lastName: '',
            login: '',
            password: '',
            org: '',
            email: '',
            tel: '',
            comment: '',
            isActive: true,
            groups: [],

            shortName: function () {
                return this.getShortName();
            }
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'groups',
                relatedModel: UserGroup.Model,
                collectionType: UserGroup.Collection
            }
        ],

        urlRoot: AppConfig.rest.users,

        getShortName: function () {
            return this.get('lastName') +
                ' ' + this.get('firstName')[0] + '.';
        }
    });

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        url: function () {
            return AppConfig.rest.users;
        }
    });

    return {
        Model: UserModel,
        Collection: UserCollection
    };
});
