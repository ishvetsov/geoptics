define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'graphics': 'graphics',
            'journal': 'journal',
            '*other': 'notFound'
        }
    });

    return function () {
        return new Router({
            controller: require('./common.controller').init()
        });
    };
});
