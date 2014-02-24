define(function (require) {
    'use strict';

    var Router = require('core/router');

    var CommonRouter = Router.extend({
        appRoutes: {
            '*path': 'notFound'
        }
    });

    return CommonRouter;
});
