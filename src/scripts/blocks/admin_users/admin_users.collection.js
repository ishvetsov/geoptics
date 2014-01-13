/* global _ */

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Config = require('configs/config');

    var AdminUsersModel = Backbone.Model.extend();

    var AdminUsersCollection = Backbone.Collection.extend({
        url: Config.rest.adminUsers,
        model: AdminUsersModel
    });

    return AdminUsersCollection;
});
