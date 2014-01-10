define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var UserRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'graphics': 'graphics',
            'journal': 'journal'
        }
    });

    return UserRouter;
});
