define(function (require) {
    'use strict';

    var Router = require('core/router');

    var AdminRouter = Router.extend({
        appRoutes: {
            'admin/users':              'users',
            'admin/users/new':          'newUser',
            'admin/users/:id':          'user',

            'admin/fields':             'fields',
            'admin/fields/new':         'newField',
            'admin/fields/:id':         'field',

            'admin/clusters/:id':       'cluster',

            'admin/boreholes/:boreholeId/tsensors/:channelNumber': 'tsensor',
            'admin/boreholes/:boreholeId/psensors/:channelNumber': 'psensor',

            'admin/boreholes/:id': 'borehole',

            'admin/monitoring':         'monitoring',

            'admin/boreholePointPresets': 'boreholePointPresets'
        }
    });

    return AdminRouter;
});
