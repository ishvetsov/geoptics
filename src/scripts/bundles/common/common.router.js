define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'graphics': 'graphics',
            'journal': 'journal',
            '*path': 'notFound'
        }
    });

    return {
        init: function () {
            return new Router({
                controller: require('./common.controller').init()
            });
        }
    };
});
