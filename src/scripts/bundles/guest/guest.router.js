define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '*any': 'check'
        }
    });

    return function () {
        return new Router({
            controller: require('./guest.controller').init()
        });
    };
});
