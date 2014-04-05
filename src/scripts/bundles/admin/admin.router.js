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

            'admin/boreholes/:boreholeId/perforations/new': 'newPerforation',
            'admin/boreholes/:boreholeId/perforations/:id': 'perforation',

            'admin/boreholes/:boreholeId/depths/new': 'newDepth',
            'admin/boreholes/:boreholeId/depths/:id': 'depth',

            'admin/boreholes/:boreholeId/moments/new': 'newMoment',
            'admin/boreholes/:boreholeId/moments/:id': 'moment',

            'admin/monitoring':         'monitoring'
        }
    });

    return AdminRouter;
});
