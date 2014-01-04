/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),

        Bus = require('bus'),
        NavigationView = require('./navigation.view'),
        sessionController = require('blocks/session/session.controller'),
        navigationConfig = require('configs/navigation.config');

    var m = sessionController.getCurrentUser();
    var items = 
        navigationConfig[sessionController.getCurrentUser().get('type')].items,
        navigationView = new NavigationView(items);

    var NavigationController = Marionette.Controller.extend({
        getInstance: function () {
            return navigationView;
        }
    });

    return new NavigationController();
});
