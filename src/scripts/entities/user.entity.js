define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Config = require('configs/config');

    var UserModel = Backbone.Model.extend();

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return {
        Model: UserModel,
        Collection: UsersCollection
    };
});
