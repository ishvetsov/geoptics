/* global _, $, Backbone */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        Bus = require('bus'),
        LoginView = require('./login.view'),
        sessionController = require('blocks/session/session.controller');

    var loginView = new LoginView();

    var LoginController = Marionette.Controller.extend({
        initialize: function () {
            _.bindAll(this, '_onAuthorizationSucceed');

            this.listenTo(loginView, 'login:try', function (authData) {
                sessionController.authorization(authData)
                    .then(this._onAuthorizationSucceed);
            });
        },

        _onAuthorizationSucceed: function (data) {
            if (data === true) {
                this.trigger('login:success');
            }
        },

        getInstance: function () {
            return loginView;
        }
    });

    return new LoginController();
});
