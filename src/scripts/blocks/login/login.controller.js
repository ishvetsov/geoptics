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

        isAuthorized: function () {
            return true; // TODO: dummy
        }
    });

    return new LoginController();
});
