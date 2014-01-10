define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '*path': 'notFound'
        }
    });

    return Router;
});
