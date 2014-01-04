/* global _, $, Backbone */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),

        Bus = require('bus'),
        LoginView = require('./login.view');

    var loginView = new LoginView();

    var LoginController = Marionette.Controller.extend({
        initialize: function () {
            this.listenTo(loginView, 'login:try', function (authData) {
                // Здесь запрос на сервер
                $.cookie('isAuth', true);
                Bus.events.trigger('login:success');
            });
        },

        getInstance: function () {
            return loginView;
        },

        isAuthorized: function () {
            return $.cookie('isAuth') === 'true' ? true : false;
        },

        logout: function () {
            $.removeCookie('isAuth');
        }
    });

    return new LoginController();
});
