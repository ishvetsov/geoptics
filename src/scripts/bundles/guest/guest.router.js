define(function (require) {
    'use strict';

    var Router = require('core/router');

    var GuestRouter = Router.extend({
        appRoutes: {
            '*any': 'check'
        }
    });

    return GuestRouter;
});
