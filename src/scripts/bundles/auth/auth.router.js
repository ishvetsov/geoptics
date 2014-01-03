define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '*other': 'check'
        }
    });

    return function () {
        return new Router({
            controller: require('./auth.controller')
        });
    };
});
