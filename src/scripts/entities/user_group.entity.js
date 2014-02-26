/* global _ */
define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var UserGroupModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            name: ''
        }
    });

    var UserGroupCollection = Backbone.Collection.extend({
        model: UserGroupModel,

        url: function () {
            if (this.parents) {
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
