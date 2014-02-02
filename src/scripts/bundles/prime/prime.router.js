define(function (require) {
    'use strict';

    var Router = require('core/router');

    var PrimeRouter = Router.extend({
        appRoutes: {
            'graphics': 'graphics',
            'journal': 'journal'
        }
    });

    return PrimeRouter;
});
