/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        LoginView = require('./login.view'),
        sessionController = require('blocks/session/session.controller');

    var loginView = new LoginView();

    var LoginController = Marionette.Controller.extend({
        initialize: function () {
            loginView.on('login:try', sessionController.authorization);
        },

        getInstance: function () {
            return loginView;
        }
    });

    return new LoginController();
});
