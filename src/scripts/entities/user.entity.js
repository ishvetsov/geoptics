define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        UserGroup = require('./user_group.entity'),
        SensorsSet = require('./sensors_set.entity');

    var UserModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
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
            sensorsSets: []
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'groups',
                relatedModel: UserGroup.Model,
                collectionType: UserGroup.Collection
            },
            {
                type: Backbone.Many,
                key: 'sensorsSets',
                relatedModel: SensorsSet.Model,
                collectionType: SensorsSet.Collection
            }
        ],

        urlRoot: AppConfig.rest.users
    });

    _.extend(UserModel.prototype, {
        getShortName: function () {
            return this.get('lastName')
                + ' ' + this.get('firstName')[0]
                + '.' + this.get('middleName')[0] + '.';
        },

        getFullName: function () {
            return this.get('lastName')
                + ' ' + this.get('firstName')
                + ' ' + this.get('middleName');
        },

        getAccessLevel: function () {
            var groups = this.get('groups').toJSON();

            if (groups.length === 0) { return 0; }

            return _.min(groups, function (group) {
                return group.access;
            });
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
