/* global _ */
define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var UserGroupModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
            name: '',
            access: undefined,

            users: []
        },

        initialize: function () {
            _.bindAll(this, 'destroy');
        }
    });

    var UserGroupCollection = Backbone.Collection.extend({
        model: UserGroupModel,

        url: function () {
            if (this.parents && this.parents.length) {
                return this.parents[0].url() + AppConfig.rest.usergroups;
            }
            return AppConfig.rest.usergroups;
        }
    });

    return {
        Model: UserGroupModel,
        Collection: UserGroupCollection
    };
});
