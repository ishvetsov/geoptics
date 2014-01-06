define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AdminRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'admin': 'admin'
        }
    });

    return {
        init: function () {
            return new AdminRouter({
                controller: require('./admin.controller').init()
            });
        }
    };
});
