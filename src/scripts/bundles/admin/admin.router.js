define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AdminRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'admin/users': 'users',
            'admin/user/new': 'newUser',
            'admin/user/:id': 'user',
            'admin/deposits': 'deposits',
            'admin/monitoring': 'monitoring'
        }
    });

    return AdminRouter;
});
