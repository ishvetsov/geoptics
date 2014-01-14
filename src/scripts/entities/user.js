define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations');

    var UserModel = Backbone.AssociatedModel.extend({
        defaults: {
            firstName: '',
            lastName: '',
            type: 'user'
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