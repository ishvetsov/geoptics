define(function (require) {
    'use strict';

    var
        Backbone = require('backbone');

    var UserModel = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            type: 'user'
        }
    });

    return {
        Model: UserModel
    };
});