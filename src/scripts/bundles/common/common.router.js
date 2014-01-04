define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'graphics': 'graphics',
            'journal': 'journal',
            'admin': 'admin',
            '*other': 'notFound'
        }
    });

    return function () {
        return new Router({
            controller: require('./common.controller')
        });
    };
});
