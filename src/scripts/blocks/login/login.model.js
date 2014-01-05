define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var LoginModel = Backbone.Model.extend({
        defaults: {
            user: '',
            password: ''
        }
    });

    return LoginModel;
});
