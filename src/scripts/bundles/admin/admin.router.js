define(function (require) {
    'use strict';

    var Router = require('core/router');

    var AdminRouter = Router.extend({
        appRoutes: {
            'admin/users': 'users',
            'admin/user/new': 'newUser',
            'admin/user/:id': 'user',

            'admin/fields': 'fields',
            'admin/fields/new': 'newField',
            'admin/fields/:id': 'field',
            
            'admin/clusters/new': 'newCluster',
            'admin/clusters/:id': 'cluster',

            'admin/boreholes/:id': 'borehole',

            'admin/monitoring': 'monitoring'
        }
    });

    return AdminRouter;
});
