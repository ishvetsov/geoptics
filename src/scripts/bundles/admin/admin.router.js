define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AdminRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'admin/users': 'users',
            'admin/user/:id': 'user',
            'admin/wells': 'wells',
            'admin/monitoring': 'monitoring'
        }
    });

    return AdminRouter;
});
