/* global _, $, Backbone */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),

        Bus = require('bus'),
        LoginView = require('./login.view'),
        sessionController = require('blocks/session/session.controller');

    var loginView = new LoginView();

    var LoginController = Marionette.Controller.extend({
        initialize: function () {
            this.listenTo(loginView, 'login:try', function (authData) {
                sessionController.authorization(authData);
                if (sessionController.isAuthorized()) {
                    Bus.events.trigger('login:success');
                }
            });
        },

        getInstance: function () {
            return loginView;
        }
    });

    return new LoginController();
});
