/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),

        Bus = require('bus'),
        LoginView = require('./login.view');

    var loginView = new LoginView();

    var LoginController = Marionette.Controller.extend({
        getInstance: function () {
            return loginView;
        },

        render: function () {
            Bus.events.trigger('app:login:show', loginView);
        },

        isAuthorized: function () {
            return false; // TODO: dummy
        }
    });

    return new LoginController();
});