define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var PrimeRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'graphics': 'graphics',
            'journal': 'journal'
        }
    });

    return PrimeRouter;
});
