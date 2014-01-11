define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var GuestRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '*any': 'check'
        }
    });

    return GuestRouter;
});
