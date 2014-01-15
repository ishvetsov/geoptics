define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations');

    var UserModel = Backbone.AssociatedModel.extend();

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return {
        Model: UserModel,
        Collection: UsersCollection
    };
});
