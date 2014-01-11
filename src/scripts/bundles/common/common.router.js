define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var CommonRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '*path': 'notFound'
        }
    });

    return CommonRouter;
});
