define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations');

    var UserGroupModel = Backbone.AssociatedModel.extend();

    return {
        Model: UserGroupModel
    };
});
