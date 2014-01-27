define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AdminRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'admin/users': 'users',
            'admin/user/new': 'newUser',
            'admin/user/:id': 'user',

            'admin/fields': 'fields',
            'admin/fields/new': 'newField',
            'admin/fields/:id': 'field',
            
            'admin/clusters/:id': 'cluster',
            'admin/clusters/new': 'newCluster',

            'admin/boreholes/:id': 'borehole',  

            'admin/monitoring': 'monitoring'
        }
    });

    return AdminRouter;
});
