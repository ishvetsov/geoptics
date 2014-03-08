define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        AppConfig = require('configs/app.config');

    var LoginModel = Backbone.Model.extend({
        defaults: {
            user: '',
            password: '',
            isAdmin: true
        }
    });

    _.extend(LoginModel.prototype, {
        send: function () {
            return $.post(AppConfig.rest.login, this.toJSON());
        }
    })

    return {
        Model: LoginModel
    };
});
