/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        NavigationView = require('./navigation.view'),
        navigationConfig = require('./navigation.config'),
        sessionController = require('blocks/session/session.controller');

    var navigationView = null;

    var NavigationController = Marionette.Controller.extend({
        getInstance: function () {
            return navigationView;
        },

        active: function (name) {
            navigationView.setActiveItem(name);
        },

        init: function () {
            var userType = sessionController.getAccessLevel(),
                items = navigationConfig[userType].items;

            navigationView = new NavigationView(items);

            navigationView.on('user:click', function () {
                sessionController.trigger('session:out');
            });
        }
    });

    return new NavigationController();
});
